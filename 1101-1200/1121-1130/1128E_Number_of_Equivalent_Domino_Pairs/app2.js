// 1128. Number of Equivalent Domino Pairs
// https://leetcode.com/problems/number-of-equivalent-domino-pairs/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let pairs = 0;
  const counts = new Array(100).fill(0);
  for (const [a, b] of dominoes) {
    const index = a < b ? a * 10 + b : b * 10 + a;
    pairs += counts[index]++;
  }
  return pairs;
};

var dominoes = [
  [1, 2],
  [2, 1],
  [3, 4],
  [5, 6],
];
var expected = 1;
var result = numEquivDominoPairs(dominoes);
console.log(result, result === expected);

var dominoes = [
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2],
];
var expected = 3;
var result = numEquivDominoPairs(dominoes);
console.log(result, result === expected);

var dominoes = [
  [1, 1],
  [2, 2],
  [1, 1],
  [1, 2],
  [1, 2],
  [1, 1],
];
var expected = 4;
var result = numEquivDominoPairs(dominoes);
console.log(result, result === expected);

var dominoes = [
  [2, 1],
  [5, 4],
  [3, 7],
  [6, 2],
  [4, 4],
  [1, 8],
  [9, 6],
  [5, 3],
  [7, 4],
  [1, 9],
  [1, 1],
  [6, 6],
  [9, 6],
  [1, 3],
  [9, 7],
  [4, 7],
  [5, 1],
  [6, 5],
  [1, 6],
  [6, 1],
  [1, 8],
  [7, 2],
  [2, 4],
  [1, 6],
  [3, 1],
  [3, 9],
  [3, 7],
  [9, 1],
  [1, 9],
  [8, 9],
];
var expected = 11;
var result = numEquivDominoPairs(dominoes);
console.log(result, result === expected);
