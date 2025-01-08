// 2168. Unique Substrings With Equal Digit Frequency
// https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function (s) {
  const zero = '0'.charCodeAt(0);
  const n = s.length;
  const unique = new Set();
  for (let i = 0; i < n; i++) {
    const freq = new Array(10).fill(0);
    for (let j = i; j < n; j++) {
      freq[s.charCodeAt(j) - zero]++;
      if (sameFreq(freq)) {
        const str = s.substring(i, j + 1);
        unique.add(str);
      }
    }
  }
  return unique.size;

  function sameFreq(freq) {
    return new Set(freq.filter(Boolean)).size === 1;
  }
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
