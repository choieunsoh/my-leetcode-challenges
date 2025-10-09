// 2660. Determine the Winner of a Bowling Game
// https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let score1 = 0;
  let score2 = 0;
  const n = player1.length;
  for (let i = 0; i < n; i++) {
    if ((i > 0 && player1[i - 1] === 10) || (i > 1 && player1[i - 2] === 10)) {
      score1 += player1[i] * 2;
    } else {
      score1 += player1[i];
    }

    if ((i > 0 && player2[i - 1] === 10) || (i > 1 && player2[i - 2] === 10)) {
      score2 += player2[i] * 2;
    } else {
      score2 += player2[i];
    }
  }

  if (score1 > score2) return 1;
  if (score2 > score1) return 2;
  return 0;
};

var player1 = [5, 10, 3, 2],
  player2 = [6, 5, 7, 3];
var expected = 1;
var result = isWinner(player1, player2);
console.log(result, result === expected);

var player1 = [3, 5, 7, 6],
  player2 = [8, 10, 10, 2];
var expected = 2;
var result = isWinner(player1, player2);
console.log(result, result === expected);

var player1 = [2, 3],
  player2 = [4, 1];
var expected = 0;
var result = isWinner(player1, player2);
console.log(result, result === expected);

var player1 = [1, 1, 1, 10, 10, 10, 10],
  player2 = [10, 10, 10, 10, 1, 1, 1];
var expected = 2;
var result = isWinner(player1, player2);
console.log(result, result === expected);
