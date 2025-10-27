// 2042. Check if Numbers Are Ascending in a Sentence
// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const nums = s.trim().split(/\s+/);
  let prevNum = Number.MIN_SAFE_INTEGER;
  for (const strNum of nums) {
    const num = Number(strNum);
    if (isNaN(num)) continue;
    if (num <= prevNum) return false;
    prevNum = num;
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
