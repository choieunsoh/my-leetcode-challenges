// 3813. Vowel-Consonant Score
// https://leetcode.com/problems/vowel-consonant-score/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function (s) {
  let vowelCount = 0;
  let consonantCount = 0;
  for (const char of s) {
    if (char >= 'a' && char <= 'z') {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return consonantCount === 0 ? 0 : (vowelCount / consonantCount) | 0;
};

var s = 'cooear';
var expected = 2;
var result = vowelConsonantScore(s);
console.log(result, result === expected);

var s = 'axeyizou';
var expected = 1;
var result = vowelConsonantScore(s);
console.log(result, result === expected);

var s = 'au 123';
var expected = 0;
var result = vowelConsonantScore(s);
console.log(result, result === expected);
