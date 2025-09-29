// 3280. Convert Date to Binary
// https://leetcode.com/problems/convert-date-to-binary/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  const [year, month, day] = date.split('-').map(Number);
  const yearBinary = year.toString(2);
  const monthBinary = month.toString(2);
  const dayBinary = day.toString(2);
  return [yearBinary, monthBinary, dayBinary].join('-');
};

var date = '2080-02-29';
var expected = '100000100000-10-11101';
var result = convertDateToBinary(date);
console.log(result, result === expected);

var date = '1900-01-01';
var expected = '11101101100-1-1';
var result = convertDateToBinary(date);
console.log(result, result === expected);
