// 1910. Remove All Occurrences of a Substring
// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
// Knuth-Morris-Pratt (KMP) Algorithm
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  // Precompute KMP longest prefix-suffix array for the pattern
  const kmpLPS = computeLongestPrefixSuffix(part);

  // Using stack to track characters and support pattern matching
  const charStack = [];

  // Array to store pattern matching indices during traversal
  const patternIndexes = new Array(s.length + 1).fill(0);

  let patternIndex = 0;
  for (let strIndex = 0; strIndex < s.length; strIndex++) {
    const currentChar = s[strIndex];
    charStack.push(currentChar);

    if (currentChar === part[patternIndex]) {
      // Track the next pattern index when characters match
      patternIndexes[charStack.length] = ++patternIndex;

      if (patternIndex === part.length) {
        // Remove entire matched pattern from stack
        let remainingLength = part.length;
        while (remainingLength > 0) {
          charStack.pop();
          remainingLength--;
        }

        // Restore pattern index for next potential match
        patternIndex = charStack.length > 0 ? patternIndexes[charStack.length] : 0;
      }
    } else {
      if (patternIndex !== 0) {
        // Backtrack pattern matching using KMP LPS
        strIndex--;
        patternIndex = kmpLPS[patternIndex - 1];
        charStack.pop();
      } else {
        // Reset pattern index tracking when no match is possible
        patternIndexes[charStack.length] = 0;
      }
    }
  }

  // Convert remaining stack characters to result string
  return charStack.join('');

  function computeLongestPrefixSuffix(pattern) {
    // Array to store the longest proper prefix which is also a suffix
    const lps = new Array(pattern.length).fill(0);

    // Initialize tracking variables for prefix and current position
    let current = 1;
    let prefixLength = 0;
    while (current < pattern.length) {
      // If characters match, extend the prefix length
      if (pattern.charAt(current) === pattern.charAt(prefixLength)) {
        // Store the length of matching prefix
        lps[current++] = ++prefixLength;
      }
      // If characters don't match and we're not at the start of the pattern
      else if (prefixLength != 0) {
        // Backtrack to the previous longest prefix-suffix
        prefixLength = lps[prefixLength - 1];
      }
      // If no match and no prefix to backtrack
      else {
        // No prefix-suffix match found
        lps[current++] = 0;
      }
    }

    // Return the computed longest prefix-suffix array
    return lps;
  }
};

var s = 'daabcbaabcbc',
  part = 'abc';
var expected = 'dab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);

var s = 'axxxxyyyyb',
  part = 'xy';
var expected = 'ab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);
