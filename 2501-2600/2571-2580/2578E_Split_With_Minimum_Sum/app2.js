// 2578. Split With Minimum Sum
// https://leetcode.com/problems/split-with-minimum-sum/
// T.C.: O(d)
// S.C.: O(d)
/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const digits = new Array(10).fill(0);
  while (num > 0) {
    digits[num % 10]++;
    num = (num / 10) | 0;
  }
  let num1 = 0;
  let num2 = 0;
  let isNum1 = true;
  for (let digit = 0; digit < 10; digit++) {
    while (digits[digit] > 0) {
      if (isNum1) {
        num1 = num1 * 10 + digit;
      } else {
        num2 = num2 * 10 + digit;
      }
      isNum1 = !isNum1;
      digits[digit]--;
    }
  }
  return num1 + num2;
};

var num = 4325;
var expected = 59;
var result = splitNum(num);
console.log(result, result === expected);

var num = 687;
var expected = 75;
var result = splitNum(num);
console.log(result, result === expected);

var num = 11;
var expected = 2;
var result = splitNum(num);
console.log(result, result === expected);
