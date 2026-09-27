// 4043. Count Rotations With Exactly K Equal Adjacent Pairs
// https://leetcode.com/problems/count-rotations-with-exactly-k-equal-adjacent-pairs/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function (s, k) {
  const n = s.length;
  let equal = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === s[(i + 1) % n]) {
      equal++;
    }
  }

  const diff = n - equal;
  return k === equal ? diff : k === equal - 1 ? equal : 0;
};

var s = 'aab',
  k = 1;
var expected = 2;
var result = countRotations(s, k);
console.log(result, result === expected);

var s = 'abca',
  k = 0;
var expected = 1;
var result = countRotations(s, k);
console.log(result, result === expected);
