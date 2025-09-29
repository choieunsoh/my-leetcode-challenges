// 3270. Find the Key of the Numbers
// https://leetcode.com/problems/find-the-key-of-the-numbers/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  let key = 0;
  for (let i = 0; i < 4; i++) {
    const digit1 = num1 % 10;
    const digit2 = num2 % 10;
    const digit3 = num3 % 10;
    const minDigit = Math.min(digit1, digit2, digit3);

    key += 10 ** i * minDigit;

    num1 = (num1 / 10) | 0;
    num2 = (num2 / 10) | 0;
    num3 = (num3 / 10) | 0;
  }
  return key;
};

var num1 = 1,
  num2 = 10,
  num3 = 1000;
var expected = 0;
var result = generateKey(num1, num2, num3);
console.log(result, result === expected);

var num1 = 987,
  num2 = 879,
  num3 = 798;
var expected = 777;
var result = generateKey(num1, num2, num3);
console.log(result, result === expected);

var num1 = 1,
  num2 = 2,
  num3 = 3;
var expected = 1;
var result = generateKey(num1, num2, num3);
console.log(result, result === expected);
