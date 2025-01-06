// 3412. Find Mirror Score of a String
// https://leetcode.com/problems/find-mirror-score-of-a-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function (s) {
  let score = 0;
  const a = 'a'.charCodeAt(0);
  const seen = Array.from({ length: 26 }, () => []);
  for (let right = 0; right < s.length; right++) {
    const charIndex = s.charCodeAt(right) - a;
    const mirrorIndex = 25 - charIndex;
    if (seen[mirrorIndex].length > 0) {
      const left = seen[mirrorIndex].pop();
      score += right - left;
    } else {
      seen[charIndex].push(right);
    }
  }
  return score;
};

var s = 'aczzx';
var expected = 5;
var result = calculateScore(s);
console.log(result, result === expected);

var s = 'abcdef';
var expected = 0;
var result = calculateScore(s);
console.log(result, result === expected);

var s = 'eockppxdqclkhjgvnw';
var expected = 50;
var result = calculateScore(s);
console.log(result, result === expected);
