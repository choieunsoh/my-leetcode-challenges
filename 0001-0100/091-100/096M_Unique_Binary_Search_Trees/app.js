// 96. Unique Binary Search Trees
// https://leetcode.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const G = Array(n + 1).fill(0);
  G[0] = G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

var n = 3;
var expected = 5;
var result = numTrees(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = numTrees(n);
console.log(result, result === expected);
