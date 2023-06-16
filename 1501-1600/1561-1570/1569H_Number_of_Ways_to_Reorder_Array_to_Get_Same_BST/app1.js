// 1569. Number of Ways to Reorder Array to Get Same BST
// https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/editorial/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  const factCache = new Map();
  const ways = numOfWaysHelper(nums) - 1n;
  return Number(ways % 1_000_000_007n);

  function numOfWaysHelper(nums) {
    if (nums.length < 3) return 1n;

    const root = nums[0];
    const left = nums.filter((p) => p < root);
    const right = nums.filter((p) => p > root);

    const comb = combination(left.length + right.length, left.length);
    const leftWays = numOfWaysHelper(left);
    const rightWays = numOfWaysHelper(right);
    return BigInt(comb * leftWays * rightWays);
  }

  function combination(n, k) {
    n = BigInt(n);
    k = BigInt(k);
    if (n < 2) return 1n;
    return factorial(n) / factorial(n - k) / factorial(k);
  }

  function factorial(n) {
    if (n < 2) return 1n;
    if (factCache.has(n)) return factCache.get(n);

    const result = BigInt(n) * factorial(n - 1n);
    factCache.set(n, result);
    return result;
  }
};

var nums = [2, 1, 3];
var expected = 1;
var result = numOfWays(nums);
console.log(result, result === expected);

var nums = [3, 4, 5, 1, 2];
var expected = 5;
var result = numOfWays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 0;
var result = numOfWays(nums);
console.log(result, result === expected);

var nums = [
  10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22, 37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13,
  16, 27, 17, 34, 7, 15, 3, 11, 24, 42, 33, 40, 32,
];
var expected = 182440977;
var result = numOfWays(nums);
console.log(result, result === expected);
