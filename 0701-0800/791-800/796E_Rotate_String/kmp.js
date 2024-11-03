// 796. Rotate String
// https://leetcode.com/problems/rotate-string/
// Knuth-Morris-Pratt (KMP) algorithm
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // Check if the lengths of both strings are different; if so, they can't be rotations
  if (s.length !== goal.length) return false;

  // Concatenate 's' with itself to create a new string containing all possible rotations
  const doubledString = s + s;

  // Perform KMP substring search to check if 'goal' is a substring of 'doubledString'
  return kmpSearch(doubledString, goal);

  function kmpSearch(text, pattern) {
    // Precompute the LPS (Longest Prefix Suffix) array for the pattern
    const lps = computeLPS(pattern);
    let textIndex = 0;
    let patternIndex = 0;
    let textLength = text.length;
    let patternLength = pattern.length;

    // Loop through the text to find the pattern
    while (textIndex < textLength) {
      // If characters match, move both indices forward
      if (text.charAt(textIndex) === pattern.charAt(patternIndex)) {
        textIndex++;
        patternIndex++;
        // If we've matched the entire pattern, return true
        if (patternIndex === patternLength) return true;
      }
      // If there's a mismatch after some matches, use the LPS array to skip unnecessary comparisons
      else if (patternIndex > 0) {
        patternIndex = lps[patternIndex - 1];
      }
      // If no matches, move to the next character in text
      else {
        textIndex++;
      }
    }
    // Pattern not found in text
    return false;
  }

  function computeLPS(pattern) {
    const patternLength = pattern.length;
    const lps = new Array(patternLength).fill(0);
    let length = 0;
    let index = 1;

    // Build the LPS array
    while (index < patternLength) {
      // If characters match, increment length and set lps value
      if (pattern.charAt(index) === pattern.charAt(length)) {
        length++;
        lps[index++] = length;
      }
      // If there's a mismatch, update length using the previous LPS value
      else if (length > 0) {
        length = lps[length - 1];
      }
      // No match and length is zero
      else {
        lps[index++] = 0;
      }
    }
    return lps;
  }
};

var s = 'abcde',
  goal = 'cdeab';
var expected = true;
var result = rotateString(s, goal);
console.log(result, result === expected);

var s = 'abcde',
  goal = 'abced';
var expected = false;
var result = rotateString(s, goal);
console.log(result, result === expected);

var s = 'bbbacddceeb',
  goal = 'ceebbbbacdd';
var expected = true;
var result = rotateString(s, goal);
console.log(result, result === expected);
