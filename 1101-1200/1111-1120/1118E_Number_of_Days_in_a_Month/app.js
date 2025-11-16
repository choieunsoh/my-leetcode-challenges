// 1118. Number of Days in a Month
// https://leetcode.com/problems/number-of-days-in-a-month/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function (year, month) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) return 29;
  return days[month - 1];

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
};

var year = 1992,
  month = 7;
var expected = 31;
var result = numberOfDays(year, month);
console.log(result, result === expected);

var year = 2000,
  month = 2;
var expected = 29;
var result = numberOfDays(year, month);
console.log(result, result === expected);

var year = 1900,
  month = 2;
var expected = 28;
var result = numberOfDays(year, month);
console.log(result, result === expected);
