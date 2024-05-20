// 2512. Reward Top K Students
// https://leetcode.com/problems/reward-top-k-students/description/
const { PriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n * log(k))
// S.C.: O(k)
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
  const minScore = new PriorityQueue((a, b) => a[1] - b[1] || b[0] - a[0]);
  const positiveWords = new Set(positive_feedback);
  const negativeWords = new Set(negative_feedback);
  for (let i = 0; i < report.length; i++) {
    const studentId = student_id[i];
    const words = report[i].split(' ');
    let score = 0;
    for (const word of words) {
      if (positiveWords.has(word)) {
        score += 3;
      } else if (negativeWords.has(word)) {
        score--;
      }
    }
    minScore.enqueue([studentId, score]);
    if (minScore.size() > k) {
      minScore.dequeue();
    }
  }

  const result = new Array(k);
  for (let i = k - 1; i >= 0; i--) {
    result[i] = minScore.dequeue()[0];
  }
  return result;
};

var positive_feedback = ['smart', 'brilliant', 'studious'],
  negative_feedback = ['not'],
  report = ['this student is studious', 'the student is smart'],
  student_id = [1, 2],
  k = 2;
var expected = [1, 2];
var result = topStudents(positive_feedback, negative_feedback, report, student_id, k);
console.log(result, result.join() === expected.join());

var positive_feedback = ['smart', 'brilliant', 'studious'],
  negative_feedback = ['not'],
  report = ['this student is not studious', 'the student is smart'],
  student_id = [1, 2],
  k = 2;
var expected = [2, 1];
var result = topStudents(positive_feedback, negative_feedback, report, student_id, k);
console.log(result, result.join() === expected.join());
