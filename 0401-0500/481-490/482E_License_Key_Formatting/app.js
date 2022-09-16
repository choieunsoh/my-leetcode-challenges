// https://leetcode.com/problems/license-key-formatting/
// 482. License Key Formatting
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const result = [];
  let chars = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '-') chars += s[i];
  }

  let start = chars.length % k;
  if (start === 0) start = k;
  result.push(chars.substring(0, start));

  while (start < chars.length) {
    result.push(chars.substring(start, start + k));
    start += k;
  }

  return result.join('-').toUpperCase();
};

var s = '5F3Z-2e-9-w',
  k = 4;
var expected = '5F3Z-2E9W';
var result = licenseKeyFormatting(s, k);
console.log(result, result === expected);

var s = '2-5g-3-J',
  k = 2;
var expected = '2-5G-3J';
var result = licenseKeyFormatting(s, k);
console.log(result, result === expected);
