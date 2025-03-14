// 1100. Find K-Length Substrings With No Repeated Characters
// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {
  const a = 'a'.charCodeAt(0);
  const n = s.length;
  const counts = new Array(26).fill(0);
  let left = 0;
  let substrCount = 0;
  for (let right = 0; right < n; right++) {
    const rightIndex = s.charCodeAt(right) - a;
    counts[rightIndex]++;
    while (counts[rightIndex] > 1) {
      const leftIndex = s.charCodeAt(left++) - a;
      counts[leftIndex]--;
    }
    if (right - left + 1 >= k) substrCount++;
  }
  return substrCount;
};

var s = 'havefunonleetcode',
  k = 5;
var expected = 6;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);

var s = 'home',
  k = 5;
var expected = 0;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);

var s = 'aa',
  k = 1;
var expected = 2;
var result = numKLenSubstrNoRepeats(s, k);
console.log(result, result === expected);
