// 1792. Maximum Average Pass Ratio
// https://leetcode.com/problems/maximum-average-pass-ratio/description/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  const maxGain = new MaxPriorityQueue({ priority: ({ pass, total }) => (pass + 1) / (total + 1) - pass / total });
  for (const [pass, total] of classes) {
    maxGain.enqueue({ pass, total });
  }

  while (!maxGain.isEmpty() && extraStudents > 0) {
    const { pass, total } = maxGain.dequeue().element;
    const newPass = pass + 1;
    const newTotal = total + 1;
    maxGain.enqueue({ pass: newPass, total: newTotal });
    extraStudents--;
  }

  let sum = 0;
  while (!maxGain.isEmpty()) {
    const { pass, total } = maxGain.dequeue().element;
    sum += pass / total;
  }
  return Math.round((sum / classes.length) * 1e5) / 1e5;
};

var classes = [
    [1, 2],
    [3, 5],
    [2, 2],
  ],
  extraStudents = 2;
var expected = 0.78333;
var result = maxAverageRatio(classes, extraStudents);
console.log(result, result === expected);

var classes = [
    [2, 4],
    [3, 9],
    [4, 5],
    [2, 10],
  ],
  extraStudents = 4;
var expected = 0.53485;
var result = maxAverageRatio(classes, extraStudents);
console.log(result, result === expected);
