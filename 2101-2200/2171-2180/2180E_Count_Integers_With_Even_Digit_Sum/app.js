// 2180. Count Integers With Even Digit Sum
// https://leetcode.com/problems/count-integers-with-even-digit-sum/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      sum += temp % 10;
      temp = (temp / 10) | 0;
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};

var num = 4;
var expected = 2;
var result = countEven(num);
console.log(result, result === expected);

var num = 30;
var expected = 14;
var result = countEven(num);
console.log(result, result === expected);
