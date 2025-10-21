// 2259. Remove Digit From Number to Maximize Result
// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let result = 0n;
  const n = number.length;
  for (let i = 0; i < n; i++) {
    if (number[i] === digit) {
      const num = number.substring(0, i) + number.substring(i + 1);
      if (BigInt(num) > BigInt(result)) {
        result = num;
      }
    }
  }
  return result;
};

var number = '123',
  digit = '3';
var expected = '12';
var result = removeDigit(number, digit);
console.log(result, result === expected);

var number = '1231',
  digit = '1';
var expected = '231';
var result = removeDigit(number, digit);
console.log(result, result === expected);

var number = '551',
  digit = '5';
var expected = '51';
var result = removeDigit(number, digit);
console.log(result, result === expected);

var number = '2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471',
  digit = '3';
var expected = '299858953917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471';
var result = removeDigit(number, digit);
console.log(result, result === expected);
