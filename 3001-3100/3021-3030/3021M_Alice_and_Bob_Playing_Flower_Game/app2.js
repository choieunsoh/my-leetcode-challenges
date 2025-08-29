// 3021. Alice and Bob Playing Flower Game
// https://leetcode.com/problems/alice-and-bob-playing-flower-game/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function (n, m) {
  return ((n * m) / 2) | 0;
};

var n = 3,
  m = 2;
var expected = 3;
var result = flowerGame(n, m);
console.log(result, result === expected);

var n = 1,
  m = 1;
var expected = 0;
var result = flowerGame(n, m);
console.log(result, result === expected);

var n = 4,
  m = 3;
var expected = 6;
var result = flowerGame(n, m);
console.log(result, result === expected);

var n = 4,
  m = 6;
var expected = 12;
var result = flowerGame(n, m);
console.log(result, result === expected);
