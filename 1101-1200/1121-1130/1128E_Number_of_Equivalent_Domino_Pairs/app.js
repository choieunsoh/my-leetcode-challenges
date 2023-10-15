// 1128. Number of Equivalent Domino Pairs
// https://leetcode.com/problems/number-of-equivalent-domino-pairs/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let pairs = 0;
  const map = new Map();
  for (const [a, b] of dominoes) {
    const key = a < b ? a * 10 + b : b * 10 + a;
    const count = (map.get(key) ?? -1) + 1;
    map.set(key, count);
    pairs += count;
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
