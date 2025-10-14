// 2437. Number of Valid Clock Times
// https://leetcode.com/problems/number-of-valid-clock-times/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
  const h1 = time[0] === '?' ? (time[1] < '4' ? 3 : 2) : 1;
  let h2 = 1;
  if (time[1] === '?') {
    if (time[0] === '?') {
      h2 = 12;
    } else if (time[0] === '2') {
      h2 = 4;
    } else {
      h2 = 10;
    }
  }
  const m1 = time[3] === '?' ? 6 : 1;
  const m2 = time[4] === '?' ? 10 : 1;
  return h1 * h2 * m1 * m2;
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
