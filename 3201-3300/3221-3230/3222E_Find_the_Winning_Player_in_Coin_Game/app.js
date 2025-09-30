// 3222. Find the Winning Player in Coin Game
// https://leetcode.com/problems/find-the-winning-player-in-coin-game/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x, y) {
  const coin75Turns = x;
  const coin10Turns = (y / 4) | 0;
  const minTurns = Math.min(coin75Turns, coin10Turns);
  return minTurns % 2 == 1 ? 'Alice' : 'Bob';
};

var x = 2,
  y = 7;
var expected = 'Alice';
var result = winningPlayer(x, y);
console.log(result, result === expected);

var x = 4,
  y = 11;
var expected = 'Bob';
var result = winningPlayer(x, y);
console.log(result, result === expected);
