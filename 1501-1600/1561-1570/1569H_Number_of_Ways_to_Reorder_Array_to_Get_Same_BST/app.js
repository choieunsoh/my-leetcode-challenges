// 1569. Number of Ways to Reorder Array to Get Same BST
// https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/editorial/
const mod = 1e9 + 7;
const MOD = BigInt(mod);
const table = new Array(1001);
for (let i = 0; i < 1001; i++) {
  table[i] = new Array(1001).fill(1);
}

for (let i = 1; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    table[i][j] = (table[i - 1][j] + table[i][j - 1]) % mod;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  return Number((recursion(nums) % MOD) - BigInt(1));

  function recursion(ns) {
    if (ns.length <= 2) return BigInt(1);

    const part1 = [];
    const part2 = [];
    for (let i = 1; i < ns.length; i++) {
      if (ns[i] < ns[0]) {
        part1.push(ns[i]);
      } else {
        part2.push(ns[i]);
      }
    }

    let left = recursion(part1) % MOD;
    let right = recursion(part2) % MOD;
    return (BigInt(table[part1.length][part2.length]) * left * right) % MOD;
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
