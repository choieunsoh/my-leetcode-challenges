// 292. Nim Game
// https://leetcode.com/problems/nim-game/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

var n = 4;
var expected = false;
var result = canWinNim(n);
console.log(result, result === expected);

var n = 1;
var expected = true;
var result = canWinNim(n);
console.log(result, result === expected);

var n = 2;
var expected = true;
var result = canWinNim(n);
console.log(result, result === expected);

var n = 5;
var expected = true;
var result = canWinNim(n);
console.log(result, result === expected);
