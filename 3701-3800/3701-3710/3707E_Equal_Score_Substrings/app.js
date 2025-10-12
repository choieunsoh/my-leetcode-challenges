// 3707. Equal Score Substrings
// https://leetcode.com/problems/equal-score-substrings/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function (s) {
  const a = 'a'.charCodeAt(0);
  const total = s.split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - a + 1, 0);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += s.charCodeAt(i) - a + 1;
    if (sum === target) return true;
    if (sum > target) break;
  }
  return false;
};

var s = 'adcb';
var expected = true;
var result = scoreBalance(s);
console.log(result, result === expected);

var s = 'bace';
var expected = false;
var result = scoreBalance(s);
console.log(result, result === expected);

var s = 'abdcd';
var expected = true;
var result = scoreBalance(s);
console.log(result, result === expected);
