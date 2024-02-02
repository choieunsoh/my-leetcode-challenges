// 1291. Sequential Digits
// https://leetcode.com/problems/sequential-digits/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const result = [];
  const value = '123456789';
  const minDigit = String(low).length;
  const maxDigit = String(high).length;
  for (let digit = minDigit; digit <= maxDigit; digit++) {
    for (let i = 0; i <= value.length - digit; i++) {
      const num = Number(value.slice(i, i + digit));
      if (num >= low && num <= high) {
        result.push(num);
      }
    }
  }
  return result;
};

var low = 100,
  high = 300;
var expected = [123, 234];
var result = sequentialDigits(low, high);
console.log(result, result.join() === expected.join());

var low = 1000,
  high = 13000;
var expected = [1234, 2345, 3456, 4567, 5678, 6789, 12345];
var result = sequentialDigits(low, high);
console.log(result, result.join() === expected.join());

var low = 10,
  high = 1000000000;
var expected = [
  12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456,
  34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789,
];
var result = sequentialDigits(low, high);
console.log(result, result.join() === expected.join());

var low = 58,
  high = 155;
var expected = [67, 78, 89, 123];
var result = sequentialDigits(low, high);
console.log(result, result.join() === expected.join());
