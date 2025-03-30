// 3499. Maximize Active Section with Trade I
// https://leetcode.com/problems/maximize-active-section-with-trade-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const n = s.length;
  let originalOneCount = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') originalOneCount++;
  }

  const oneSegments = [];
  let i = 0;
  while (i < n) {
    if (s[i] === '1') {
      let start = i;
      while (i < n && s[i] === '1') i++;

      const leftIsZero = start > 0 ? s[start - 1] === '0' : false;
      const rightIsZero = i < n ? s[i] === '0' : false;
      if (leftIsZero && rightIsZero) {
        oneSegments.push({ start, end: i - 1, length: i - start });
      }
    } else {
      i++;
    }
  }

  if (oneSegments.length === 0) {
    return originalOneCount;
  }

  let oneLeftIndex = -1;
  const oneLeftIndices = new Array(n).fill(null);
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') {
      oneLeftIndices[i] = oneLeftIndex;
      oneLeftIndex = i;
    }
  }

  let oneRightIndex = n;
  const oneRightIndices = new Array(n).fill(null);
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '1') {
      oneRightIndices[i] = oneRightIndex;
      oneRightIndex = i;
    }
  }

  let maxZeroCount = 0;
  for (const seg of oneSegments) {
    const leftCount = seg.start - oneLeftIndices[seg.start] - 1;
    const rightCount = oneRightIndices[seg.end] - seg.end - 1;
    const zeroCount = rightCount + leftCount;
    maxZeroCount = Math.max(maxZeroCount, zeroCount);
  }
  return originalOneCount + maxZeroCount;
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
