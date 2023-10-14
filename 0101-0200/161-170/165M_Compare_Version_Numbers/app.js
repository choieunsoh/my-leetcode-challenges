// 165. Compare Version Numbers
// https://leetcode.com/problems/compare-version-numbers/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const nums1 = version1.split('.').map(Number);
  const nums2 = version2.split('.').map(Number);
  let index1 = 0;
  let index2 = 0;
  while (index1 < nums1.length || index2 < nums2.length) {
    const ver1 = nums1[index1++] ?? 0;
    const ver2 = nums2[index2++] ?? 0;
    if (ver1 !== ver2) {
      return ver1 < ver2 ? -1 : 1;
    }
  }
  return 0;
};

var version1 = '1.01',
  version2 = '1.001';
var expected = 0;
var result = compareVersion(version1, version2);
console.log(result, result === expected);

var version1 = '1.0',
  version2 = '1.0.0';
var expected = 0;
var result = compareVersion(version1, version2);
console.log(result, result === expected);

var version1 = '0.1',
  version2 = '1.1';
var expected = -1;
var result = compareVersion(version1, version2);
console.log(result, result === expected);
