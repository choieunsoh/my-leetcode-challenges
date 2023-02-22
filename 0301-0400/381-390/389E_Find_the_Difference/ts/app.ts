// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/
var findTheDifference = function (s: string, t: string): string {
  const a = 'a'.charCodeAt(0);
  const counting = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    counting[index]++;
  }
  for (let i = 0; i < t.length; i++) {
    const index = t.charCodeAt(i) - a;
    if (counting[index]-- === 0) return t[i];
  }
  return '';
};

var s = 'abcd',
  t = 'abcde';
var expected = 'e';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);

var s = '',
  t = 'y';
var expected = 'y';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);

var s = 'abcde',
  t = 'abcdea';
var expected = 'a';
var result = findTheDifference(s, t);
console.log(result, expected, result === expected);
