// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // Since we start with the lowest digit, initialize currDigit = 0.
  let numCopy = num;
  let indexFirstSix = -1;
  let currDigit = 0;

  // Check every digit of 'numCopy' from low to high.
  while (numCopy > 0) {
    // If the current digit is '6', record it as the highest digit of 6.
    if (numCopy % 10 === 6) indexFirstSix = currDigit;

    // Move on to the next digit.
    numCopy /= 10;
    currDigit++;
  }

  // If we don't find any digit of '6', return the original number,
  // otherwise, increment 'num' by the difference made by the first '6'.
  // There might be precision loss in pow function if 'indexFirstSix' is large,
  // we can write a for loop to avoid the precision loss.
  return indexFirstSix === -1 ? num : num + 3 * Math.pow(10, indexFirstSix);
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
