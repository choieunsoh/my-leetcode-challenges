// 2520. Count the Digits That Divide a Number
// https://leetcode.com/problems/count-the-digits-that-divide-a-number/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let n = num;
  while (n > 0) {
    const digit = n % 10;
    if (num % digit === 0) count++;
    n = (n / 10) | 0;
  }
  return count;
};

var num = 7;
var expected = 1;
var result = countDigits(num);
console.log(result, result === expected);

var num = 121;
var expected = 2;
var result = countDigits(num);
console.log(result, result === expected);

var num = 1248;
var expected = 4;
var result = countDigits(num);
console.log(result, result === expected);
