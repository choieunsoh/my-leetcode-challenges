// 2410. Maximum Matching of Players With Trainers
// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/description/
// T.C.: O(n log n + m log m)
// S.C.: O(log n + log m)
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let matches = 0;
  let playerIndex = 0;
  let trainerIndex = 0;
  while (playerIndex < players.length && trainerIndex < trainers.length) {
    if (players[playerIndex] <= trainers[trainerIndex]) {
      matches++;
      playerIndex++;
      trainerIndex++;
    } else {
      trainerIndex++;
    }
  }
  return matches;
};

var players = [4, 7, 9],
  trainers = [8, 2, 5, 8];
var expected = 2;
var result = matchPlayersAndTrainers(players, trainers);
console.log(result, result === expected);

var players = [1, 1, 1],
  trainers = [10];
var expected = 1;
var result = matchPlayersAndTrainers(players, trainers);
console.log(result, result === expected);
