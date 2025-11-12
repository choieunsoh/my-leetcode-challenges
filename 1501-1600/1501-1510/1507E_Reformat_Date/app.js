// 1507. Reformat Date
// https://leetcode.com/problems/reformat-date/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parts = date.split(' ');
  const day = parts[0].slice(0, parts[0].length - 2);
  const month = monthNames.indexOf(parts[1]) + 1;
  const year = parts[2];

  const result = [];
  result.push(year);
  result.push(month.toString().padStart(2, '0'));
  result.push(day.padStart(2, '0'));
  return result.join('-');
};

var date = '20th Oct 2052';
var expected = '2052-10-20';
var result = reformatDate(date);
console.log(result, result === expected);

var date = '6th Jun 1933';
var expected = '1933-06-06';
var result = reformatDate(date);
console.log(result, result === expected);

var date = '26th May 1960';
var expected = '1960-05-26';
var result = reformatDate(date);
console.log(result, result === expected);
