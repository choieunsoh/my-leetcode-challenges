// 2168. Unique Substrings With Equal Digit Frequency
// https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function (s) {
  const n = s.length;
  const prime = 31; // Prime base for the rolling hash
  const mod = 1e9 + 7; // Modulus to avoid overflow
  const validSubstringHashes = new Set();

  for (let start = 0; start < n; start++) {
    const digitFrequency = new Array(10).fill(0); // Frequency array for digits 0-9
    let uniqueDigitsCount = 0; // Track number of unique digits in the substring
    let substringHash = 0; // Rolling hash for the current substring
    let maxDigitFrequency = 0; // Maximum frequency of any digit in the substring

    // Extend the substring from 'start' to different end positions
    for (let end = start; end < n; end++) {
      const currentDigit = s.charCodeAt(end) - '0'.charCodeAt(0);

      // This digit appears for the first time
      if (digitFrequency[currentDigit] === 0) {
        uniqueDigitsCount++;
      }

      digitFrequency[currentDigit]++;
      maxDigitFrequency = Math.max(maxDigitFrequency, digitFrequency[currentDigit]);

      // Update rolling hash
      substringHash = (prime * substringHash + currentDigit + 1) % mod;

      // Check if all digits in the substring have the same frequency
      if (maxDigitFrequency * uniqueDigitsCount === end - start + 1) {
        validSubstringHashes.add(substringHash); // Insert unique hash
      }
    }
  }

  return validSubstringHashes.size;
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
