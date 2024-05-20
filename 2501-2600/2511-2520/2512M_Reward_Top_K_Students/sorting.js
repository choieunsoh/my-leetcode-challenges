// 2512. Reward Top K Students
// https://leetcode.com/problems/reward-top-k-students/description/
// T.C.: O(n * log(n))
// S.C.: O(n)
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (positive_feedback, negative_feedback, report, student_id, k) {
  const scores = new Map();
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
    scores.set(studentId, score);
  }

  const result = Array.from(scores.entries()).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  return result.slice(0, k).map(([studentId]) => studentId);
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
