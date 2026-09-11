// 267. Palindrome Permutation II
// https://leetcode.com/problems/palindrome-permutation-ii/description/
// T.C.: O((n+1)!)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  const set = new Set();
  permute([...s], 0);
  return [...set];

  function isPalindrome(s) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
  }

  function swap(s, i, j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  function permute(s, l) {
    if (l === s.length) {
      if (isPalindrome(s)) set.add(s.join(''));
    } else {
      for (let i = l; i < s.length; i++) {
        swap(s, l, i);
        permute(s, l + 1);
        swap(s, l, i);
      }
    }
  }
};

var s = 'aabb';
var expected = ['abba', 'baab'];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());

var s = 'abc';
var expected = [];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());

var s = 'a';
var expected = ['a'];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());
