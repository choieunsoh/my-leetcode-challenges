// https://leetcode.com/problems/relative-ranks/
// 506. Relative Ranks
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const ranks = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal',
  };
  const map = new Map();
  const rankedScore = [...score].sort((a, b) => b - a);
  const result = [];
  for (let i = 0; i < rankedScore.length; i++) {
    map.set(rankedScore[i], i + 1);
  }
  for (let i = 0; i < score.length; i++) {
    const rank = map.get(score[i]);
    result.push(ranks[rank] ?? rank.toString());
  }

  return result;
};

var score = [5, 4, 3, 2, 1];
var expected = ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'];
var result = findRelativeRanks(score);
console.log(result, result.join() === expected.join());

var score = [10, 3, 8, 9, 4];
var expected = ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'];
var result = findRelativeRanks(score);
console.log(result, result.join() === expected.join());
