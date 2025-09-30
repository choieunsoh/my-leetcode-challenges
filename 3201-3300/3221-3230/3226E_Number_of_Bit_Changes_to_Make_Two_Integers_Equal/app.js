// 3226. Number of Bit Changes to Make Two Integers Equal
// https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if ((n & k) !== k) return -1;
  let mask = n ^ k;
  let changes = 0;
  while (mask > 0) {
    changes += mask & 1;
    mask >>= 1;
  }
  return changes;
};

var n = 13,
  k = 4;
var expected = 2;
var result = minChanges(n, k);
console.log(result, result === expected);

var n = 21,
  k = 21;
var expected = 0;
var result = minChanges(n, k);
console.log(result, result === expected);

var n = 14,
  k = 13;
var expected = -1;
var result = minChanges(n, k);
console.log(result, result === expected);
