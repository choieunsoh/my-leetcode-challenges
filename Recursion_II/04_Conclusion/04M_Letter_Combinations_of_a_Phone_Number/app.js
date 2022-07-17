// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// 17. Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const result = [];

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

  function backTracking(index = 0, input = '') {
    if (index >= digits.length) {
      result.push(input);
      return;
    }

    const letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backTracking(index + 1, input + letters[i]);
    }
  }

  backTracking();
  return result;
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
