// 2024. Maximize the Confusion of an Exam
// https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let result = k;
  let left = 0;
  let trueCount = 0;
  let falseCount = 0;
  const n = answerKey.length;
  for (let right = 0; right < n; right++) {
    const rightAns = answerKey[right];
    if (rightAns === 'T') {
      trueCount++;
    } else {
      falseCount++;
    }

    while (trueCount > k && falseCount > k) {
      const leftAns = answerKey[left++];
      if (leftAns === 'T') {
        trueCount--;
      } else {
        falseCount--;
      }
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};

var answerKey = 'TTFF',
  k = 2;
var expected = 4;
var result = maxConsecutiveAnswers(answerKey, k);
console.log(result, result === expected);

var answerKey = 'TFFT',
  k = 1;
var expected = 3;
var result = maxConsecutiveAnswers(answerKey, k);
console.log(result, result === expected);

var answerKey = 'TTFTTFTT',
  k = 1;
var expected = 5;
var result = maxConsecutiveAnswers(answerKey, k);
console.log(result, result === expected);

var answerKey = 'F',
  k = 1;
var expected = 1;
var result = maxConsecutiveAnswers(answerKey, k);
console.log(result, result === expected);
