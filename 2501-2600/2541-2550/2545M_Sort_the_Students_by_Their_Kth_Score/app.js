// 2545. Sort the Students by Their Kth Score
// https://leetcode.com/problems/sort-the-students-by-their-kth-score/
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};

var score = [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  k = 2;
var expected = [
  [7, 5, 11, 2],
  [10, 6, 9, 1],
  [4, 8, 3, 15],
];
var result = sortTheStudents(score, k);
console.log(result, result.join() === expected.join());

var score = [
    [3, 4],
    [5, 6],
  ],
  k = 0;
var expected = [
  [5, 6],
  [3, 4],
];
var result = sortTheStudents(score, k);
console.log(result, result.join() === expected.join());
