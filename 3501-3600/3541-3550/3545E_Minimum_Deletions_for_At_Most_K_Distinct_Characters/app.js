// 3545. Minimum Deletions for At Most K Distinct Characters
// https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function (s, k) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  const freq = counts.filter(Boolean).sort((a, b) => a - b);
  const exceed = freq.length - k;

  let deletions = 0;
  for (let i = 0; i < exceed; i++) {
    deletions += freq[i];
  }
  return deletions;
};

var s = 'abc',
  k = 2;
var expected = 1;
var result = minDeletion(s, k);
console.log(result, result === expected);

var s = 'aabb',
  k = 2;
var expected = 0;
var result = minDeletion(s, k);
console.log(result, result === expected);

var s = 'yyyzz',
  k = 1;
var expected = 2;
var result = minDeletion(s, k);
console.log(result, result === expected);
