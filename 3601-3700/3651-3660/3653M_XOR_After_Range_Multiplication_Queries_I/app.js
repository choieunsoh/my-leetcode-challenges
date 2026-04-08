// 3653. XOR After Range Multiplication Queries I
// https://leetcode.com/problems/xor-after-range-multiplication-queries-i/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const MOD = 1e9 + 7;
  for (const [l, r, k, v] of queries) {
    let idx = l;
    while (idx <= r) {
      nums[idx] = (nums[idx] * v) % MOD;
      idx += k;
    }
  }
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};

var nums = [1, 1, 1],
  queries = [[0, 2, 1, 4]];
var expected = 4;
var result = xorAfterQueries(nums, queries);
console.log(result, result === expected);

var nums = [2, 3, 1, 5, 4],
  queries = [
    [1, 4, 2, 3],
    [0, 2, 1, 2],
  ];
var expected = 31;
var result = xorAfterQueries(nums, queries);
console.log(result, result === expected);
