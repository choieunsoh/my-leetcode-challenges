// 532. K-diff Pairs in an Array
// https://leetcode.com/problems/k-diff-pairs-in-an-array/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1);
  }

  let result = 0;
  for (const [num, count] of map) {
    if (k === 0) {
      if (count > 1) result++;
      continue;
    }

    const target = num + k;
    const targetCount = map.get(target) ?? 0;
    if (targetCount > 0) result++;
  }
  return result;
};

var nums = [3, 1, 4, 1, 5],
  k = 2;
var expected = 2;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  k = 1;
var expected = 4;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 3, 1, 5, 4],
  k = 0;
var expected = 1;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1],
  k = 0;
var expected = 1;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [6, 7, 3, 6, 4, 6, 3, 5, 6, 9],
  k = 4;
var expected = 2;
var result = findPairs(nums, k);
console.log(result, result === expected);
