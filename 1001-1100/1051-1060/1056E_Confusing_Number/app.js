// 1056. Confusing Number
// https://leetcode.com/problems/confusing-number/description/
// T.C.: O(log10(n))
// S.C.: O(log10(n))
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function (n) {
  const invalidNums = '23457';
  const num = n.toString();
  let num180 = '';
  for (const digit of num) {
    if (invalidNums.includes(digit)) return false;
    if (digit === '6') {
      num180 = '9' + num180;
    } else if (digit === '9') {
      num180 = '6' + num180;
    } else {
      num180 = digit + num180;
    }
  }
  return num !== num180;
};

var n = 6;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 89;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 11;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 379;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 916;
var expected = false;
var result = confusingNumber(n);
console.log(result, result === expected);

var n = 8101;
var expected = true;
var result = confusingNumber(n);
console.log(result, result === expected);
