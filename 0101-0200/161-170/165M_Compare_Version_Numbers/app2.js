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
  let index1 = 0;
  let index2 = 0;
  const n1 = version1.length;
  const n2 = version2.length;
  while (index1 < n1 || index2 < n2) {
    const next1 = getNextChunk(version1, n1, index1);
    const next2 = getNextChunk(version2, n2, index2);

    index1 = next1.index;
    index2 = next2.index;

    if (next1.version !== next2.version) {
      return next1.version > next2.version ? 1 : -1;
    }
  }
  return 0;

  function getNextChunk(version, n, p) {
    if (p > n - 1) {
      return { version: 0, index: p };
    }

    let pEnd = p;
    while (pEnd < n && version[pEnd] != '.') {
      pEnd++;
    }

    const ver = Number(version.substring(p, pEnd !== n - 1 ? pEnd : n));
    return { version: ver, index: pEnd + 1 };
  }
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
