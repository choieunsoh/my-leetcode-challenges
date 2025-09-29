// 3238. Find the Number of Winning Players
// https://leetcode.com/problems/find-the-number-of-winning-players/description/
// T.C.: O(m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
  let winners = new Set();
  const balls = Array.from({ length: n }, () => new Array(11).fill(0));
  for (const [player, color] of pick) {
    balls[player][color]++;
    if (balls[player][color] > player) {
      winners.add(player);
    }
  }
  return winners.size;
};

var n = 4,
  pick = [
    [0, 0],
    [1, 0],
    [1, 0],
    [2, 1],
    [2, 1],
    [2, 0],
  ];
var expected = 2;
var result = winningPlayerCount(n, pick);
console.log(result, result === expected);

var n = 5,
  pick = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ];
var expected = 0;
var result = winningPlayerCount(n, pick);
console.log(result, result === expected);

var n = 5,
  pick = [
    [1, 1],
    [2, 4],
    [2, 4],
    [2, 4],
  ];
var expected = 1;
var result = winningPlayerCount(n, pick);
console.log(result, result === expected);

var n = 2,
  pick = [
    [0, 8],
    [0, 3],
  ];
var expected = 1;
var result = winningPlayerCount(n, pick);
console.log(result, result === expected);
