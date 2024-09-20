// 214. Shortest Palindrome
// https://leetcode.com/problems/shortest-palindrome/description/
// Rolling Hash Based Algorithm
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  const hashBase = 29;
  const MOD = 1e9 + 7;
  let forwardHash = 0;
  let reverseHash = 0;
  let power = 1;
  let palindromeEndIndex = -1;

  // Calculate rolling hashes and find the longest palindromic prefix
  for (let i = 0; i < n; i++) {
    const currentCharCode = s.charCodeAt(i) - a + 1;

    // Update forward hash
    forwardHash = (forwardHash * hashBase + currentCharCode) % MOD;

    // Update reverse hash
    reverseHash = (reverseHash + currentCharCode * power) % MOD;
    power = (power * hashBase) % MOD;

    // If forward and reverse hashes match, update palindrome end index
    if (forwardHash === reverseHash) {
      palindromeEndIndex = i;
    }
  }

  // Find the remaining suffix after the longest palindromic prefix
  const suffix = s.substring(palindromeEndIndex + 1);
  // Reverse the remaining suffix
  const reversedSuffix = reverse(suffix);

  // Prepend the reversed suffix to the original string and return the result
  return reversedSuffix + s;

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
