// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  return n % 2 === 0;
};

var n = 2;
var expected = true;
var result = divisorGame(n);
console.log(result, result === expected);

var n = 3;
var expected = false;
var result = divisorGame(n);
console.log(result, result === expected);
