// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// 17. Letter Combinations of a Phone Number
var letterCombinations = function (digits: string): string[] {
  if (digits.length === 0) return [];

  const phones = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const map = new Map();
  for (let i = 0; i < phones.length; i++) {
    map.set((i + 2).toString(), phones[i]);
  }
  if (digits.length === 1) return map.get(digits[0]).split('');

  const result: string[] = [];
  backtracking();
  return result;

  function backtracking(index = 0, input = '') {
    if (index === digits.length) {
      result.push(input);
      return;
    }

    const letters = map.get(digits[index]);
    for (let i = 0; i < letters.length; i++) {
      backtracking(index + 1, input + letters[i]);
    }
  }
};

var digits = '23';
var expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());

var digits = '';
var expected: string[] = [];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());

var digits = '2';
var expected = ['a', 'b', 'c'];
var result = letterCombinations(digits);
console.log(result, result.join() === expected.join());
