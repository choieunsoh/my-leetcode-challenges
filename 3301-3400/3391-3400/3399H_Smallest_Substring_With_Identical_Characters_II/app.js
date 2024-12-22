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
  s = s.split('');
  const n = s.length;
  let f1 = 0;
  let f2 = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] ^ (i & 1)) {
      f1++;
    } else {
      f2++;
    }
  }

  if (f1 <= numOps || f2 <= numOps) return 1;

  const temp = [];
  let curr = s[0];
  let count = 0;
  for (const c of s) {
    if (c === curr) {
      count++;
    } else {
      temp.push(count);
      curr = c;
      count = 1;
    }
  }
  temp.push(count);

  let left = 2;
  let right = n;
  while (left <= right) {
    const mid = (left + right) >> 1;
    let count = 0;
    for (const x of temp) {
      count += (x / (mid + 1)) | 0;
    }

    if (count > numOps) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return Math.max(left, 2);
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
