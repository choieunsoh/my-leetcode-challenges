// 3399. Smallest Substring With Identical Characters II
// https://leetcode.com/problems/smallest-substring-with-identical-characters-ii/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} numOps
 * @return {number}
 */
var minLength = function (s, numOps) {
  let start = 1;
  let end = s.length;
  let result = s.length;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (isValid(s, numOps, mid)) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;

  function check(s, numOps, startChar) {
    for (let i = 0; i < s.length; ++i) {
      if (startChar === s[i]) numOps--;
      startChar = startChar === '0' ? '1' : '0';
    }
    return numOps >= 0;
  }

  function isValid(s, numOps, mid) {
    if (mid === 1) {
      return check(s, numOps, '1') || check(s, numOps, '0');
    }

    let count = 0;
    let last = -1;
    for (let i = 0; i < s.length; ++i) {
      if (s[i] === last) {
        count++;
      } else {
        numOps -= Math.floor(count / (mid + 1));
        last = s[i];
        count = 1;
      }
    }

    if (count > mid) {
      numOps -= Math.floor(count / (mid + 1));
    }

    return numOps >= 0;
  }
};

var s = '000001',
  numOps = 1;
var expected = 2;
var result = minLength(s, numOps);
console.log(result, result === expected);

var s = '0000',
  numOps = 2;
var expected = 1;
var result = minLength(s, numOps);
console.log(result, result === expected);

var s = '0101',
  numOps = 0;
var expected = 1;
var result = minLength(s, numOps);
console.log(result, result === expected);

var s = '100110',
  numOps = 1;
var expected = 2;
var result = minLength(s, numOps);
console.log(result, result === expected);

var s = '100110',
  numOps = 2;
var expected = 1;
var result = minLength(s, numOps);
console.log(result, result === expected);
