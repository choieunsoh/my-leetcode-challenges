// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// 2108. Find First Palindromic String in the Array
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return '';
};

var words = ['abc', 'car', 'ada', 'racecar', 'cool'];
var expected = 'ada';
var result = firstPalindrome(words);
console.log(result, result === expected);

var words = ['notapalindrome', 'racecar'];
var expected = 'racecar';
var result = firstPalindrome(words);
console.log(result, result === expected);

var words = ['def', 'ghi'];
var expected = '';
var result = firstPalindrome(words);
console.log(result, result === expected);
