// 3258. Count Substrings That Satisfy K-Constraint I
// https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  const n = s.length;
  let ones = 0;
  let zeros = 0;
  let result = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (s[right] === '1') {
      ones++;
    } else {
      zeros++;
    }

    while (ones > k && zeros > k) {
      if (s[left] === '1') {
        ones--;
      } else {
        zeros--;
      }
      left++;
    }

    result += right - left + 1;
  }

  return result;
};

var s = '10101',
  k = 1;
var expected = 12;
var result = countKConstraintSubstrings(s, k);
console.log(result, result === expected);

var s = '1010101',
  k = 2;
var expected = 25;
var result = countKConstraintSubstrings(s, k);
console.log(result, result === expected);

var s = '11111',
  k = 1;
var expected = 15;
var result = countKConstraintSubstrings(s, k);
console.log(result, result === expected);
