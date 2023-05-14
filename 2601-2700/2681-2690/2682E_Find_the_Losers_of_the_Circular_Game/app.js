// 2682. Find the Losers of the Circular Game
// https://leetcode.com/problems/find-the-losers-of-the-circular-game/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const seen = new Array(n).fill(0);
  let curr = 0;
  let steps = k;
  while (seen[curr] === 0) {
    seen[curr]++;
    curr = (curr + steps) % n;
    steps += k;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (seen[i] === 0) {
      result.push(i + 1);
    }
  }
  return result;
};

var n = 5,
  k = 2;
var expected = [4, 5];
var result = circularGameLosers(n, k);
console.log(result, result.join() === expected.join());

var n = 4,
  k = 4;
var expected = [2, 3, 4];
var result = circularGameLosers(n, k);
console.log(result, result.join() === expected.join());
