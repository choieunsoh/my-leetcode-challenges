// 93. Restore IP Addresses
// https://leetcode.com/problems/restore-ip-addresses/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  function isValidSegment(segment) {
    if (segment === '0') return true;
    if (segment[0] === '0') return false;
    if (Number(segment) > 255) return false;
    return true;
  }

  function getSegments(startIndex) {
    const segments = [];
    for (let i = startIndex; i < startIndex + 3; i++) {
      if (i > s.length - 1) break;
      const segment = s.substring(startIndex, i + 1);
      segments.push(segment);
    }
    return segments;
  }

  function dfs(startIndex = 0, path = []) {
    if (path.length > 4) return;
    if (startIndex === s.length) {
      if (path.length === 4) {
        result.push(path.join('.'));
      }
      return;
    }

    const segments = getSegments(startIndex);
    for (const segment of segments) {
      if (!isValidSegment(segment)) continue;

      path.push(segment);
      dfs(startIndex + segment.length, path);
      path.pop();
    }
  }

  dfs();
  return result;
};

var s = '25525511135';
var expected = ['255.255.11.135', '255.255.111.35'];
var result = restoreIpAddresses(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '0000';
var expected = ['0.0.0.0'];
var result = restoreIpAddresses(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '101023';
var expected = [
  '1.0.10.23',
  '1.0.102.3',
  '10.1.0.23',
  '10.10.2.3',
  '101.0.2.3',
];
var result = restoreIpAddresses(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '010010';
var expected = ['0.10.0.10', '0.100.1.0'];
var result = restoreIpAddresses(s);
console.log(result, result.sort().join() === expected.sort().join());
