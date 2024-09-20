// 214. Shortest Palindrome
// https://leetcode.com/problems/shortest-palindrome/description/
// Manacher's Algorithm
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  // Preprocess the string to handle palindromes uniformly
  const modifiedString = preprocessString(s);
  const palindromeRadiusArray = new Array(modifiedString.length).fill(0);
  let center = 0;
  let rightBoundary = 0;
  let maxPalindromeLength = 0;

  // Iterate through each character in the modified string
  for (let i = 1; i < modifiedString.length - 1; i++) {
    const mirrorIndex = 2 * center - i;

    // Use previously computed values to avoid redundant calculations
    if (rightBoundary > i) {
      palindromeRadiusArray[i] = Math.min(rightBoundary - i, palindromeRadiusArray[mirrorIndex]);
    }

    // Expand around the current center while characters match
    while (
      modifiedString.charAt(i + 1 + palindromeRadiusArray[i]) ===
      modifiedString.charAt(i - 1 - palindromeRadiusArray[i])
    ) {
      palindromeRadiusArray[i]++;
    }

    // Update the center and right boundary if the palindrome extends beyond the current boundary
    if (i + palindromeRadiusArray[i] > rightBoundary) {
      center = i;
      rightBoundary = i + palindromeRadiusArray[i];
    }

    // Update the maximum length of palindrome starting at the beginning
    if (i - palindromeRadiusArray[i] == 1) {
      maxPalindromeLength = Math.max(maxPalindromeLength, palindromeRadiusArray[i]);
    }
  }

  // Construct the shortest palindrome by reversing the suffix and prepending it to the original string
  const suffix = reverse(s.substring(maxPalindromeLength));
  return suffix + s;

  function preprocessString(s) {
    // Add boundaries and separators to handle palindromes uniformly
    let sb = '^';
    for (const c of s) {
      sb += '#' + c;
    }
    return sb + '#$';
  }

  function reverse(str) {
    return str.split('').reverse().join('');
  }
};

var s = 'aacecaaa';
var expected = 'aaacecaaa';
var result = shortestPalindrome(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'dcbabcd';
var result = shortestPalindrome(s);
console.log(result, result === expected);
