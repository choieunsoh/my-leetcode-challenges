// 823. Binary Trees With Factors
// https://leetcode.com/problems/binary-trees-with-factors/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const MOD = 1e9 + 7;
  arr.sort((a, b) => a - b);
  const set = new Set(arr);
  const dp = new Map();
  for (const num of arr) {
    dp.set(num, 1);
  }

  for (const i of arr) {
    for (const j of arr) {
      if (j > Math.sqrt(i)) break;

      const k = i / j;
      if (i % j === 0 && set.has(k)) {
        const multiplier = j === k ? 1 : 2;
        let count = dp.get(i);
        count += multiplier * dp.get(j) * dp.get(k);
        dp.set(i, count % MOD);
      }
    }
  }

  const result = [...dp.values()].reduce((sum, count) => (sum + count) % MOD, 0);
  return result;
};

var arr = [2, 4];
var expected = 3;
var result = numFactoredBinaryTrees(arr);
console.log(result, result === expected);

var arr = [2, 4, 5, 10];
var expected = 7;
var result = numFactoredBinaryTrees(arr);
console.log(result, result === expected);
