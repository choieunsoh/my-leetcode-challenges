// 1569. Number of Ways to Reorder Array to Get Same BST
// https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/editorial/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  const ll = BigInt;
  const mod = ll(1e9 + 7);
  return Number((dfs(nums) - 1n) % mod);

  function combination(m, n) {
    return factorial(m, n) / factorial(n, n);
  }

  function factorial(m, n) {
    let num = 1n;
    let cnt = 0;
    for (let i = ll(m); i > 0; i--) {
      if (cnt === n) break;
      num *= i;
      cnt++;
    }
    return num;
  }

  function dfs(a) {
    if (a.length <= 2) return 1n;
    let left = [],
      right = [];
    for (const x of a) if (x < a[0]) left.push(x);
    for (const x of a) if (x > a[0]) right.push(x);
    let ln = left.length,
      rn = right.length;
    return combination(ln + rn, rn) * dfs(left) * dfs(right);
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
