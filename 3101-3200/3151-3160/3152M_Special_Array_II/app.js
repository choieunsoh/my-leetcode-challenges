// 3152. Special Array II
// https://leetcode.com/problems/special-array-ii/description/
// T.C.: O(m+n)
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const prefixSum = new Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1];
    if ((nums[i] & 1) === (nums[i - 1] & 1)) {
      prefixSum[i]++;
    }
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    result[i] = prefixSum[end] - prefixSum[start] === 0;
  }
  return result;
};

var nums = [3, 4, 1, 2, 6],
  queries = [[0, 4]];
var expected = [false];
var result = isArraySpecial(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [4, 3, 1, 6],
  queries = [
    [0, 2],
    [2, 3],
  ];
var expected = [false, true];
var result = isArraySpecial(nums, queries);
console.log(result, result.join() === expected.join());
