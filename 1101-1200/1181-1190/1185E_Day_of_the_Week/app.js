// 1185. Day of the Week
// https://leetcode.com/problems/day-of-the-week/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  const q = day;
  const m = month;
  const K = year % 100;
  const J = Math.floor(year / 100);
  const h = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7;
  const weekdays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return weekdays[(h + 7) % 7];
};

var day = 31,
  month = 8,
  year = 2019;
var expected = 'Saturday';
var result = dayOfTheWeek(day, month, year);
console.log(result, result === expected);

var day = 18,
  month = 7,
  year = 1999;
var expected = 'Sunday';
var result = dayOfTheWeek(day, month, year);
console.log(result, result === expected);

var day = 15,
  month = 8,
  year = 1993;
var expected = 'Sunday';
var result = dayOfTheWeek(day, month, year);
console.log(result, result === expected);

var day = 29,
  month = 2,
  year = 2016;
var expected = 'Monday';
var result = dayOfTheWeek(day, month, year);
console.log(result, result === expected);

var day = 7,
  month = 3,
  year = 2003;
var expected = 'Friday';
var result = dayOfTheWeek(day, month, year);
console.log(result, result === expected);
