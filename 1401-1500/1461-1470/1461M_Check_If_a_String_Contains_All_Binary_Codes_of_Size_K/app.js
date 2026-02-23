// 1461. Check If a String Contains All Binary Codes of Size K
// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/
// T.C.: O(n*k)
// S.C.: O(n*k)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const n = s.length;
  const unique = new Set();
  const expectedSize = 2 ** k;
  for (let i = 0; i < n - k + 1; i++) {
    const str = s.slice(i, i + k);
    unique.add(str);
  }
  return unique.size === expectedSize;
};

var s = '00110110',
  k = 2;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '0110',
  k = 1;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '0110',
  k = 2;
var expected = false;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '00110',
  k = 2;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);
