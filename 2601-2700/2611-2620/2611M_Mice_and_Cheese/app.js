// 2611. Mice and Cheese
// https://leetcode.com/problems/mice-and-cheese/
/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  let score = 0;
  const diff = [];
  const n = reward1.length;
  for (let i = 0; i < n; i++) {
    diff.push(reward2[i] - reward1[i]);
    score += reward2[i];
  }
  diff.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    score -= diff[i];
  }
  return score;
};

var reward1 = [1, 4, 4, 6, 4],
  reward2 = [6, 5, 3, 6, 1],
  k = 1;
var expected = 24;
var result = miceAndCheese(reward1, reward2, k);
console.log(result, result === expected);

var reward1 = [1, 1, 3, 4],
  reward2 = [4, 4, 1, 1],
  k = 2;
var expected = 15;
var result = miceAndCheese(reward1, reward2, k);
console.log(result, result === expected);

var reward1 = [1, 1],
  reward2 = [1, 1],
  k = 2;
var expected = 2;
var result = miceAndCheese(reward1, reward2, k);
console.log(result, result === expected);
