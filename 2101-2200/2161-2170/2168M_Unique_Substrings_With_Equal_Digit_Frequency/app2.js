// 2168. Unique Substrings With Equal Digit Frequency
// https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function (s) {
  const n = s.length;
  const unique = new Set();

  for (let start = 0; start < n; start++) {
    const freq = {};
    let maxFreq = 0;
    let totalLength = 0;
    for (let end = start; end < n; end++) {
      if (!freq[s[end]]) {
        freq[s[end]] = 0;
      }
      freq[s[end]] += 1;
      maxFreq = Math.max(maxFreq, freq[s[end]]);
      totalLength += 1;
      const uniqueDigits = Object.keys(freq).length;
      if (totalLength % uniqueDigits === 0 && totalLength === uniqueDigits * maxFreq) {
        unique.add(s.substring(start, end + 1));
      }
    }
  }
  return unique.size;
};

var s = '1212';
var expected = 5;
var result = equalDigitFrequency(s);
console.log(result, result === expected);

var s = '12321';
var expected = 9;
var result = equalDigitFrequency(s);
console.log(result, result === expected);

var s = '0123456789';
var expected = 55;
var result = equalDigitFrequency(s);
console.log(result, result === expected);
