// 186. Reverse Words in a String II
// https://leetcode.com/problems/reverse-words-in-a-string-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  const n = s.length;
  let left = 0;
  let right = 0;
  while (right < n) {
    while (right < n && s[right] !== ' ') {
      right++;
    }

    reverse(left, right - 1);

    right++;
    left = right;
  }

  reverse(0, n - 1);

  function reverse(left, right) {
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
};

var s = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
var expected = ['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e'];
reverseWords(s);
console.log(s, s.join() === expected.join());

var s = ['a'];
var expected = ['a'];
//reverseWords(s);
console.log(s, s.join() === expected.join());
