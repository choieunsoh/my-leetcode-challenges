// 1460. Make Two Arrays Equal by Reversing Subarrays
// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const countMap = new Map();
  for (let i = 0; i < target.length; i++) {
    countMap.set(target[i], (countMap.get(target[i]) ?? 0) + 1);
  }

  for (let i = 0; i < target.length; i++) {
    if (!countMap.has(arr[i])) return false;
    countMap.set(arr[i], countMap.get(arr[i]) - 1);
  }

  for (const [key, value] of countMap) {
    if (value > 0) return false;
  }

  return true;
};

var target = [1, 2, 3, 4],
  arr = [2, 4, 1, 3];
var expected = true;
var result = canBeEqual(target, arr);
console.log(result, result === expected);

var target = [7],
  arr = [7];
var expected = true;
var result = canBeEqual(target, arr);
console.log(result, result === expected);

var target = [3, 7, 9],
  arr = [3, 7, 11];
var expected = false;
var result = canBeEqual(target, arr);
console.log(result, result === expected);
