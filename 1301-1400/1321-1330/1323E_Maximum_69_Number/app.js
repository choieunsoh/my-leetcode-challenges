// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let result = 0;
  let base = 1000;
  let found = false;
  while (num) {
    const digit = (num / base) | 0;
    num %= base;
    if (!found && digit === 6) {
      result += 9 * base;
      found = true;
    } else {
      result += digit * base;
    }
    base /= 10;
  }
  return result;
};

var num = 9669;
var expected = 9969;
var result = maximum69Number(num);
console.log(result, result === expected);

var num = 9996;
var expected = 9999;
var result = maximum69Number(num);
console.log(result, result === expected);

var num = 9999;
var expected = 9999;
var result = maximum69Number(num);
console.log(result, result === expected);
