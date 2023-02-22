// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/
var findTheDifference = function (s: string, t: string): string {
  const seen = new Map<string, number>();
  for (const ch of s) {
    const count = seen.get(ch) ?? 0;
    seen.set(ch, count + 1);
  }
  for (const ch of t) {
    const count = seen.get(ch) ?? 0;
    if (count === 0) return ch;
    seen.set(ch, count - 1);
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
