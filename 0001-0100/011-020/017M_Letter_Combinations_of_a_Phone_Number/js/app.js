// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];
  dfs(0, []);
  return result;

  function dfs(i, chars) {
    if (i === digits.length) {
      result.push(chars.join(''));
      return;
    }

    const letters = map[digits[i]];
    for (const char of letters) {
      dfs(i + 1, [...chars, char]);
    }
  }
};

var digits = '23';
var expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());

var digits = '';
var expected = [];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());

var digits = '2';
var expected = ['a', 'b', 'c'];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());
