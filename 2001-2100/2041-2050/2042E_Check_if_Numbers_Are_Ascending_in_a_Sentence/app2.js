// 2042. Check if Numbers Are Ascending in a Sentence
// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let prev = 0;
  let current = 0;
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || s[i] === ' ') {
      if (current > 0) {
        if (current <= prev) return false;
        prev = current;
      }
      current = 0;
    } else if (s[i] >= '0' && s[i] <= '9') {
      current = current * 10 + (s[i] - '0');
    }
  }
  return true;
};

var s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles';
var expected = true;
var result = areNumbersAscending(s);
console.log(result, result === expected);

var s = 'hello world 5 x 5';
var expected = false;
var result = areNumbersAscending(s);
console.log(result, result === expected);

var s = 'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s';
var expected = false;
var result = areNumbersAscending(s);
console.log(result, result === expected);
