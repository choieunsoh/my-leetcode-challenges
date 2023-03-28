// sumInRange
// LC-303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
function sumInRange(nums, queries) {
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  const MOD = 1e9 + 7;
  for (const [from, to] of queries) {
    result = ((result % MOD) + (nums[to] % MOD) - ((nums[from - 1] ?? 0) % MOD)) % MOD;
  }
  return (result + MOD) % MOD;
}

var nums = [3, 0, -2, 6, -3, 2],
  queries = [
    [0, 2],
    [2, 5],
    [0, 5],
  ];
var expected = 10;
var result = sumInRange(nums, queries);
console.log(result, result === expected);
