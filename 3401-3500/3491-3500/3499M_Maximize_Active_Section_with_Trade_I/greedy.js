// 3499. Maximize Active Section with Trade I
// https://leetcode.com/problems/maximize-active-section-with-trade-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const groups = cutMaxConsecutive(s);
  let originalZero = 0;
  for (const c of s) {
    if (c === '0') originalZero++;
  }

  let maxReplaceZero = 0;
  for (let i = 2; i < groups.length; i++) {
    // find longest "000...111...000" replace to all 1's
    if (groups[i - 2][0] === '0' && groups[i - 1][0] === '1' && groups[i][0] === '0') {
      const zeroCount = groups[i - 2].length + groups[i].length;
      maxReplaceZero = Math.max(maxReplaceZero, zeroCount);
    }
  }
  return s.length - (originalZero - maxReplaceZero);

  function cutMaxConsecutive(str) {
    const groups = [];
    const n = str.length;
    let left = 0;
    for (let right = 0; right + 1 < n; right++) {
      if (str[right + 1] !== str[right]) {
        groups.push(str.slice(left, right + 1));
        left = right + 1;
      }
    }
    groups.push(str.slice(left));
    return groups;
  }
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
