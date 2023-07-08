// 2551. Put Marbles in Bags
// https://leetcode.com/problems/put-marbles-in-bags/
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  const n = weights.length;
  const pairWeights = new Array(n - 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    pairWeights[i] = weights[i] + weights[i + 1];
  }
  pairWeights.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < k - 1; i++) {
    result += pairWeights[n - 2 - i] - pairWeights[i];
  }
  return result;
};

var weights = [1, 3, 5, 1],
  k = 2;
var expected = 4;
var result = putMarbles(weights, k);
console.log(result, result === expected);

var weights = [1, 3],
  k = 2;
var expected = 0;
var result = putMarbles(weights, k);
console.log(result, result === expected);
