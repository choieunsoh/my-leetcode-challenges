// 2682. Find the Losers of the Circular Game
// https://leetcode.com/problems/find-the-losers-of-the-circular-game/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const seen = new Set();
  let curr = 1;
  let steps = k;
  while (!seen.has(curr)) {
    seen.add(curr);
    curr = (curr + steps) % n;
    steps += k;
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (!seen.has(i % n)) {
      result.push(i);
    }
  }
  return result;
};

var n = 5,
  k = 2;
var expected = [4, 5];
var result = circularGameLosers(n, k);
console.log(result, result === expected);

var n = 4,
  k = 4;
var expected = [2, 3, 4];
var result = circularGameLosers(n, k);
console.log(result, result === expected);
