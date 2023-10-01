// 482. License Key Formatting
// https://leetcode.com/problems/license-key-formatting/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  s = s.replace(/-/g, '').toUpperCase();
  let newLicenseKey = '';
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '-') {
      newLicenseKey = s[i] + newLicenseKey;
      count++;
    }
    if (count === k && i > 0) {
      newLicenseKey = '-' + newLicenseKey;
      count = 0;
    }
  }

  return newLicenseKey;
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

var s = '--2-5g-3-J',
  k = 2;
var expected = '2-5G-3J';
var result = licenseKeyFormatting(s, k);
console.log(result, result === expected);
