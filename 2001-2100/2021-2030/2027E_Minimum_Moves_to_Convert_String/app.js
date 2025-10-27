// 2027. Minimum Moves to Convert String
// https://leetcode.com/problems/minimum-moves-to-convert-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let moves = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'O') continue;
    moves++;
    i += 2;
  }
  return moves;
};

var s = 'XXX';
var expected = 1;
var result = minimumMoves(s);
console.log(result, result === expected);

var s = 'XXOX';
var expected = 2;
var result = minimumMoves(s);
console.log(result, result === expected);

var s = 'OOOO';
var expected = 0;
var result = minimumMoves(s);
console.log(result, result === expected);

var s = 'OXOX';
var expected = 1;
var result = minimumMoves(s);
console.log(result, result === expected);
