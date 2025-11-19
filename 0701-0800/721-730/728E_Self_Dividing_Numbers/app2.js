// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/description/
// T.C.: O(n*m)
// S.C.: O(m)
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let num = left; num <= right; num++) {
    const digits = getDigits(num);
    let isSelfDividing = true;
    for (const digit of digits) {
      if (digits === 0 || num % digit !== 0) {
        isSelfDividing = false;
        break;
      }
    }
    if (isSelfDividing) {
      result.push(num);
    }
  }
  return result;

  function getDigits(num) {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = (num / 10) | 0;
    }
    return digits;
  }
};

var left = 1,
  right = 22;
var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
var result = selfDividingNumbers(left, right);
console.log(result, result.join() == expected.join());

var left = 47,
  right = 85;
var expected = [48, 55, 66, 77];
var result = selfDividingNumbers(left, right);
console.log(result, result.join() == expected.join());
