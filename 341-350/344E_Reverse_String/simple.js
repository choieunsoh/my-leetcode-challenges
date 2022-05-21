// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  s.reverse();
};

var compare = (a, b) => a.toString() === b.toString();

var s = ['h', 'e', 'l', 'l', 'o'];
var expect = ['o', 'l', 'l', 'e', 'h'];
reverseString(s);
console.log(s, compare(s, expect));
