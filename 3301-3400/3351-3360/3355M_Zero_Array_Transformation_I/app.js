// 3355. Zero Array Transformation I
// https://leetcode.com/problems/zero-array-transformation-i/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  for (const [left, right] of queries) {
    diff[left]++;
    diff[right + 1]--;
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    count += diff[i];
    if (count < nums[i]) {
      return false;
    }
  }
  return true;
};

var nums = [1, 0, 1],
  queries = [[0, 2]];
var expected = true;
var result = isZeroArray(nums, queries);
console.log(result, result === expected);

var nums = [4, 3, 2, 1],
  queries = [
    [1, 3],
    [0, 2],
  ];
var expected = false;
var result = isZeroArray(nums, queries);
console.log(result, result === expected);
