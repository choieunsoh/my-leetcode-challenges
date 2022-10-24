// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  backtracking(0, []);
  return result;

  function backtracking(start, parts) {
    if (start === s.length) {
      result.push([...parts]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const word = s.substring(start, i + 1);
      if (!isPalindrome(word)) continue;

      parts.push(word);
      backtracking(i + 1, parts);
      parts.pop();
    }
  }

  function isPalindrome(word, left = 0, right = word.length - 1) {
    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }
    return true;
  }
};

var s = 'aab';
var expected = [
  ['a', 'a', 'b'],
  ['aa', 'b'],
];
var result = partition(s);
console.log(result, result.join() === expected.join());

var s = 'a';
var expected = [['a']];
var result = partition(s);
console.log(result, result.join() === expected.join());
