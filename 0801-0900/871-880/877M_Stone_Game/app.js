// 877. Stone Game
// https://leetcode.com/problems/stone-game/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  return true;
};

var piles = [5, 3, 4, 5];
var expected = true;
var result = stoneGame(piles);
console.log(result, result === expected);

var piles = [3, 7, 2, 3];
var expected = true;
var result = stoneGame(piles);
console.log(result, result === expected);
