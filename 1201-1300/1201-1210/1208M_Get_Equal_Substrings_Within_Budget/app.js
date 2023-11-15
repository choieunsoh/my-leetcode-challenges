// 1208. Get Equal Substrings Within Budget
// https://leetcode.com/problems/get-equal-substrings-within-budget/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const n = s.length;
  const nums = new Array(n);
  for (let i = 0; i < n; i++) {
    nums[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  }

  let sum = 0;
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (left < n && right < n) {
    sum += nums[right++];
    if (sum <= maxCost) {
      maxLength = Math.max(maxLength, right - left);
    } else {
      while (sum > maxCost) {
        sum -= nums[left++];
      }
    }
  }

  return maxLength;
};

var s = 'abcd',
  t = 'bcdf',
  maxCost = 3;
var expected = 3;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);

var s = 'abcd',
  t = 'cdef',
  maxCost = 3;
var expected = 1;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);

var s = 'abcd',
  t = 'acde',
  maxCost = 0;
var expected = 1;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);

var s = 'abcd',
  t = 'cdef',
  maxCost = 1;
var expected = 0;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);

var s = 'krrgw',
  t = 'zjxss',
  maxCost = 19;
var expected = 2;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);

var s = 'ujteygggjwxnfl',
  t = 'nstsenrzttikoy',
  maxCost = 43;
var expected = 5;
var result = equalSubstring(s, t, maxCost);
console.log(result, result === expected);
