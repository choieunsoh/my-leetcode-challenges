// 2038. Remove Colored Pieces if Both Neighbors are the Same Color
// https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  const n = colors.length;
  if (n < 3) return false;

  let alice = 0;
  let bob = 0;
  for (let i = 1; i < n - 1; i++) {
    const prev = colors[i - 1];
    const curr = colors[i];
    const next = colors[i + 1];
    if (prev === 'A' && curr === 'A' && next === 'A') {
      alice++;
    } else if (prev === 'B' && curr === 'B' && next === 'B') {
      bob++;
    }
  }

  return alice - bob >= 1;
};

var colors = 'AAABABB';
var expected = true;
var result = winnerOfGame(colors);
console.log(result, result === expected);

var colors = 'AA';
var expected = false;
var result = winnerOfGame(colors);
console.log(result, result === expected);

var colors = 'ABBBBBBBAAA';
var expected = false;
var result = winnerOfGame(colors);
console.log(result, result === expected);

var colors = 'AAA';
var expected = true;
var result = winnerOfGame(colors);
console.log(result, result === expected);

var colors = 'BBB';
var expected = false;
var result = winnerOfGame(colors);
console.log(result, result === expected);

var colors = 'AAAABBB';
var expected = true;
var result = winnerOfGame(colors);
console.log(result, result === expected);
