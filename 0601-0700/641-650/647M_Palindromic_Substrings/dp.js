// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 1;
  for (let i = 0; i < s.length - 1; i++) {
    count += countPalindrome(s, i, i);
    count += countPalindrome(s, i, i + 1);
  }

  function countPalindrome(s, left, right) {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
      count++;
    }
    return count;
  }

  return count;
};

var s = 'abc';
var expected = 3;
var result = countSubstrings(s);
console.log(result, result === expected);

var s = 'aaa';
var expected = 6;
var result = countSubstrings(s);
console.log(result, result === expected);
