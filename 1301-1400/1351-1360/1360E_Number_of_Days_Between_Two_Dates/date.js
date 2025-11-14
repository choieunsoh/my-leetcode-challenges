// 1360. Number of Days Between Two Dates
// https://leetcode.com/problems/number-of-days-between-two-dates/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  const diff = Math.abs(date1 - date2);
  const day = diff / (1000 * 60 * 60 * 24);
  return day;
};

var date1 = '2019-06-29',
  date2 = '2019-06-30';
var expected = 1;
var result = daysBetweenDates(date1, date2);
console.log(result, result === expected);

var date1 = '2020-01-15',
  date2 = '2019-12-31';
var expected = 15;
var result = daysBetweenDates(date1, date2);
console.log(result, result === expected);
