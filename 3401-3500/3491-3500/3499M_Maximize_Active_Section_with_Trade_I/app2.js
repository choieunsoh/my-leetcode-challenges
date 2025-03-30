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
  let prev;
  let count;
  let leftZeroes, rightZeroes;
  let totalOnes = 0;
  let maxZeroes = 0;

  for (let i = 0; i <= n; ++i) {
    if (prev === s[i]) {
      count++;
    } else {
      if (prev === '0') {
        leftZeroes = rightZeroes;
        rightZeroes = count;
        if (leftZeroes) {
          maxZeroes = Math.max(maxZeroes, leftZeroes + rightZeroes);
        }
      } else if (prev === '1') {
        totalOnes += count;
      }
      prev = s[i];
      count = 1;
    }
  }

  return totalOnes + maxZeroes;
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
