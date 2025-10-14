// 2437. Number of Valid Clock Times
// https://leetcode.com/problems/number-of-valid-clock-times/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  let hours = 1;
  let minutes = 1;

  // Handle minutes
  if (time[3] === '?') minutes *= 6;
  if (time[4] === '?') minutes *= 10;

  // Handle hours
  if (time[0] === '?' && time[1] === '?') {
    hours = 24;
  } else if (time[0] === '?') {
    hours = time[1] <= '3' ? 3 : 2; // '0','1','2' vs '0','1'
  } else if (time[1] === '?') {
    hours = time[0] === '2' ? 4 : 10;
  }

  return hours * minutes;
};

var time = '?5:00';
var expected = 2;
var result = countTime(time);
console.log(result, result === expected);

var time = '0?:0?';
var expected = 100;
var result = countTime(time);
console.log(result, result === expected);

var time = '??:??';
var expected = 1440;
var result = countTime(time);
console.log(result, result === expected);

var time = '?0:?0';
var expected = 18;
var result = countTime(time);
console.log(result, result === expected);

var time = '?3:?3';
var expected = 18;
var result = countTime(time);
console.log(result, result === expected);

var time = '23:59';
var expected = 1;
var result = countTime(time);
console.log(result, result === expected);

var time = '2?:??';
var expected = 240;
var result = countTime(time);
console.log(result, result === expected);
