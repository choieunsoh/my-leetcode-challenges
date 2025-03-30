// 3499. Maximize Active Section with Trade I
// https://leetcode.com/problems/maximize-active-section-with-trade-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const n = s.length;
  let i = 0;
  let one = 0;
  let zero = 0;
  let curr = 0;
  let prev = 0;

  while (i < n && s[i] === '1') {
    one++;
    i++;
  }
  while (i < n && s[i] === '0') {
    prev++;
    i++;
  }

  while (i < n) {
    while (i < n && s[i] === '1') {
      one++;
      i++;
    }
    if (i === n) break;
    while (i < n && s[i] === '0') {
      curr++;
      i++;
    }
    zero = Math.max(zero, prev + curr);
    prev = curr;
    curr = 0;
  }

  return one + zero;
};

var s = '01';
var expected = 1;
var result = maxActiveSectionsAfterTrade(s);
console.log(result, result === expected);

var s = '0100';
var expected = 4;
var result = maxActiveSectionsAfterTrade(s);
console.log(result, result === expected);

var s = '1000100';
var expected = 7;
var result = maxActiveSectionsAfterTrade(s);
console.log(result, result === expected);

var s = '01010';
var expected = 4;
var result = maxActiveSectionsAfterTrade(s);
console.log(result, result === expected);

var s = '10110';
var expected = 5;
var result = maxActiveSectionsAfterTrade(s);
console.log(result, result === expected);
