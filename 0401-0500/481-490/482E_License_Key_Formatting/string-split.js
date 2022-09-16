// https://leetcode.com/problems/license-key-formatting/
// 482. License Key Formatting
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const result = [];
  s = s.toUpperCase().split('-').join('').split('').reverse();
  while (s.length) {
    const substring = s.splice(0, k).reverse().join('');
    result.unshift(substring);
  }
  return result.join('-');
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
