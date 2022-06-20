// https://leetcode.com/problems/reverse-string/
// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function reverse(l = 0, r = s.length - 1) {
    if (l > r) return;
    [s[l], s[r]] = [s[r], s[l]];
    reverse(++l, --r);
  }
  reverse();
};

var compare = (a, b) => a.toString() === b.toString();

var s = ['h', 'e', 'l', 'l', 'o'];
var expect = ['o', 'l', 'l', 'e', 'h'];
reverseString(s);
console.log(s, compare(s, expect));
