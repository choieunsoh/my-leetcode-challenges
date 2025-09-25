// 3581. Count Odd Letters from Number
// https://leetcode.com/problems/count-odd-letters-from-number/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var countOddLetters = function (n) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let text = '';
  while (n > 0) {
    const digit = n % 10;
    text = numbers[digit] + text;
    n = (n / 10) | 0;
  }

  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < text.length; i++) {
    counts[text.charCodeAt(i) - a]++;
  }

  let result = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 === 1) {
      result++;
    }
  }
  return result;
};

var n = 41;
var expected = 5;
var result = countOddLetters(n);
console.log(result, result === expected);

var n = 20;
var expected = 5;
var result = countOddLetters(n);
console.log(result, result === expected);
