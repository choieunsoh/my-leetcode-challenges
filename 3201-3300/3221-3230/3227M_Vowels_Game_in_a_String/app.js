// 3227. Vowels Game in a String
// https://leetcode.com/problems/vowels-game-in-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  for (const ch of s) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      return true;
    }
  }
  return false;
};

var s = 'leetcoder';
var expected = true;
var result = doesAliceWin(s);
console.log(result, result === expected);

var s = 'bbcd';
var expected = false;
var result = doesAliceWin(s);
console.log(result, result === expected);
