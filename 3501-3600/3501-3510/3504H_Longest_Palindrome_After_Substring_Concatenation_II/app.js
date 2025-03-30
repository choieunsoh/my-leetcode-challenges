// 3504. Longest Palindrome After Substring Concatenation II
// https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-ii/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const longestPalindrome = (s, t) => {
  const m = s.length;
  const n = t.length;
  let maxLen = 0;

  // dpS[i][j] will be true if s[i...j] is a palindrome
  const dpS = Array.from({ length: m }, () => new Array(m).fill(false));
  // leftS[i] will store the length of the longest palindrome starting at s[i]
  const leftS = new Array(m).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = i; j < m; j++) {
      if (s[i] === s[j] && (j - i < 2 || dpS[i + 1][j - 1])) {
        dpS[i][j] = true;
        leftS[i] = Math.max(leftS[i], j - i + 1);
        maxLen = Math.max(maxLen, leftS[i]);
      }
    }
  }

  // dpT[i][j] will be true if t[i...j] is a palindrome
  const dpT = Array.from({ length: n }, () => new Array(n).fill(false));
  // rightT[j] will store the length of the longest palindrome ending at t[j]
  const rightT = Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (t[i] === t[j] && (j - i < 2 || dpT[i + 1][j - 1])) {
        dpT[i][j] = true;
        rightT[j] = Math.max(rightT[j], j - i + 1);
        maxLen = Math.max(maxLen, rightT[j]);
      }
    }
  }

  // dp[i][j] will store the length of the longest common palindromic subsequence ending at s[i] and t[j]
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = 1;
        if (i > 0 && j < n - 1) {
          dp[i][j] += dp[i - 1][j + 1];
        }
      }
      if (dp[i][j]) {
        let extra = 0;
        if (i + 1 < m) {
          extra = Math.max(extra, leftS[i + 1]);
        }
        if (j - 1 >= 0) {
          extra = Math.max(extra, rightT[j - 1]);
        }
        maxLen = Math.max(maxLen, 2 * dp[i][j] + extra);
      }
    }
  }

  return maxLen;
};

var s = 'a',
  t = 'a';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abc',
  t = 'def';
var expected = 1;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'b',
  t = 'aaaa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'abcde',
  t = 'ecdba';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aa',
  t = 'aa';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aa';
var expected = 5;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'aaa',
  t = 'aaaaaaa';
var expected = 10;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'i',
  t = 'ih';
var expected = 2;
var result = longestPalindrome(s, t);
console.log(result, result === expected);

var s = 'ab',
  t = 'ba';
var expected = 4;
var result = longestPalindrome(s, t);
console.log(result, result === expected);
