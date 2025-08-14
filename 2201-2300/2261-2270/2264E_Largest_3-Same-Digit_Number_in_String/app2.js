// 2264. Largest 3-Same-Digit Number in String
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const sameDigitNumbers = ['999', '888', '777', '666', '555', '444', '333', '222', '111', '000'];
  for (const sameDigitNumber of sameDigitNumbers) {
    if (contains(sameDigitNumber, num)) {
      return sameDigitNumber;
    }
  }
  return '';

  function contains(sameDigitNumber, num) {
    for (let index = 0; index <= num.length - 3; ++index) {
      if (
        num[index] === sameDigitNumber[0] &&
        num[index + 1] === sameDigitNumber[1] &&
        num[index + 2] === sameDigitNumber[2]
      ) {
        return true;
      }
    }
    return false;
  }
};

var num = '6777133339';
var expected = '777';
var result = largestGoodInteger(num);
console.log(result, result === expected);

var num = '2300019';
var expected = '000';
var result = largestGoodInteger(num);
console.log(result, result === expected);

var num = '42352338';
var expected = '';
var result = largestGoodInteger(num);
console.log(result, result === expected);
