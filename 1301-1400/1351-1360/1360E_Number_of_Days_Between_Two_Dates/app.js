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
  return Math.abs(countDayFrom1900(date1) - countDayFrom1900(date2));

  function countDayFrom1900(date) {
    const sumDays = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    let days = 0;
    const [year, month, day] = date.split('-').map(Number);
    const monthIndex = month - 1;

    for (let y = 1900; y < year; y++) {
      days += isLeapYear(y) ? 366 : 365;
    }

    if (monthIndex > 0) {
      days += sumDays[monthIndex - 1];
      if (monthIndex >= 2 && isLeapYear(year)) {
        days++;
      }
    }

    return days + day;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
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
