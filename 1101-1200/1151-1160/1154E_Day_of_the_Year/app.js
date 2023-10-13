// 1154. Day of the Year
// https://leetcode.com/problems/day-of-the-year/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const [year, month, day] = date.split('-').map(Number);
  const dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = day;
  for (let i = 1; i <= month - 1; i++) {
    days += dayOfMonths[i];
  }

  if (month > 2 && year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        days++;
      }
    } else {
      days++;
    }
  }
  return days;
};

var date = '2019-01-09';
var expected = 9;
var result = dayOfYear(date);
console.log(result, result === expected);

var date = '2019-02-10';
var expected = 41;
var result = dayOfYear(date);
console.log(result, result === expected);

var date = '2003-03-01';
var expected = 60;
var result = dayOfYear(date);
console.log(result, result === expected);

var date = '2012-01-02';
var expected = 2;
var result = dayOfYear(date);
console.log(result, result === expected);

var date = '2000-12-04';
var expected = 339;
var result = dayOfYear(date);
console.log(result, result === expected);
