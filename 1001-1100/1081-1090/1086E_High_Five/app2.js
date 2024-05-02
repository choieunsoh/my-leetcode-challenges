// 1086. High Five
// https://leetcode.com/problems/high-five/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const scores = new Map();
  for (const [id, score] of items) {
    if (!scores.has(id)) {
      scores.set(id, []);
    }
    scores.get(id).push(score);
  }

  const result = [];
  const ids = [...scores.keys()].sort((a, b) => a - b);
  for (const id of ids) {
    const totalScore = scores
      .get(id)
      .sort((a, b) => b - a)
      .slice(0, 5)
      .reduce((sum, score) => sum + score, 0);
    result.push([id, (totalScore / 5) | 0]);
  }

  return result;
};

var items = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
var expected = [
  [1, 87],
  [2, 88],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());

var items = [
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
];
var expected = [
  [1, 100],
  [7, 100],
];
var result = highFive(items);
console.log(result, result.join() === expected.join());
