// 3360. Stone Removal Game
// https://leetcode.com/problems/stone-removal-game/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  let stones = 10;
  let turns = 0;
  while (n >= stones) {
    n -= stones;
    stones--;
    turns++;
  }
  return turns % 2 === 1;
};

var n = 12;
var expected = true;
var result = canAliceWin(n);
console.log(result, result === expected);

var n = 1;
var expected = false;
var result = canAliceWin(n);
console.log(result, result === expected);

var n = 19;
var expected = false;
var result = canAliceWin(n);
console.log(result, result === expected);
