// 646. Maximum Length of Pair Chain
// https://leetcode.com/problems/maximum-length-of-pair-chain/
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  let result = 0;
  let currRight = Number.MIN_SAFE_INTEGER;
  pairs.sort((a, b) => a[0] - b[0]);
  for (const [left, right] of pairs) {
    if (left > currRight) {
      result++;
      currRight = right;
    }
  }
  return result;
};

var pairs = [
  [1, 2],
  [2, 3],
  [3, 4],
];
var expected = 2;
var result = findLongestChain(pairs);
console.log(result, result === expected);

var pairs = [
  [1, 2],
  [7, 8],
  [4, 5],
];
var expected = 3;
var result = findLongestChain(pairs);
console.log(result, result === expected);
