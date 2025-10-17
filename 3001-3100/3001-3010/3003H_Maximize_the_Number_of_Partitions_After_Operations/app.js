// 3003. Maximize the Number of Partitions After Operations
// https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
  const n = s.length;
  const left = Array.from({ length: n }, () => new Array(3).fill(0));
  const right = Array.from({ length: n }, () => new Array(3).fill(0));

  let num = 0;
  let mask = 0;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    const binary = 1 << (s.charCodeAt(i) - 97);
    if (!(mask & binary)) {
      count++;
      if (count <= k) {
        mask |= binary;
      } else {
        num++;
        mask = binary;
        count = 1;
      }
    }
    left[i + 1][0] = num;
    left[i + 1][1] = mask;
    left[i + 1][2] = count;
  }

  num = 0;
  mask = 0;
  count = 0;
  for (let i = n - 1; i > 0; i--) {
    const binary = 1 << (s.charCodeAt(i) - 97);
    if (!(mask & binary)) {
      count++;
      if (count <= k) {
        mask |= binary;
      } else {
        num++;
        mask = binary;
        count = 1;
      }
    }
    right[i - 1][0] = num;
    right[i - 1][1] = mask;
    right[i - 1][2] = count;
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    let seg = left[i][0] + right[i][0] + 2;
    let totMask = left[i][1] | right[i][1];
    let totCount = 0;
    while (totMask) {
      totMask = totMask & (totMask - 1);
      totCount++;
    }
    if (left[i][2] === k && right[i][2] === k && totCount < 26) {
      seg++;
    } else if (Math.min(totCount + 1, 26) <= k) {
      seg--;
    }
    max = Math.max(max, seg);
  }
  return max;
};

var s = 'accca',
  k = 2;
var expected = 3;
var result = maxPartitionsAfterOperations(s, k);
console.log(result, result === expected);

var s = 'aabaab',
  k = 3;
var expected = 1;
var result = maxPartitionsAfterOperations(s, k);
console.log(result, result === expected);

var s = 'xxyz',
  k = 1;
var expected = 4;
var result = maxPartitionsAfterOperations(s, k);
console.log(result, result === expected);
