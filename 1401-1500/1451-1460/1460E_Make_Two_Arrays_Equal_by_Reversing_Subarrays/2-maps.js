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
  const targetMap = new Map();
  const arrMap = new Map();
  for (let i = 0; i < target.length; i++) {
    targetMap.set(target[i], (targetMap.get(target[i]) ?? 0) + 1);
    arrMap.set(arr[i], (arrMap.get(arr[i]) ?? 0) + 1);
  }

  if (targetMap.size !== arrMap.size) return false;
  for (const [key, value] of targetMap) {
    if (arrMap.get(key) !== value) return false;
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
