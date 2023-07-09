// 2767. Partition String Into Minimum Beautiful Substrings
// https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  const n = s.length;
  const powerOfFive = [
    '10011000100101101',
    '11110100001001',
    '110000110101',
    '1001110001',
    '1111101',
    '11001',
    '101',
    '1',
  ];

  let result = Infinity;
  dfs(0, 0);
  return result === Infinity ? -1 : result;

  function dfs(start, parts) {
    if (start >= n) {
      result = Math.min(result, parts);
      return;
    }

    for (const fp of powerOfFive) {
      if (s.startsWith(fp, start)) {
        dfs(start + fp.length, parts + 1);
      }
    }
  }
};

var s = '1011';
var expected = 2;
var result = minimumBeautifulSubstrings(s);
console.log(result, result === expected);

var s = '111';
var expected = 3;
var result = minimumBeautifulSubstrings(s);
console.log(result, result === expected);

var s = '0';
var expected = -1;
var result = minimumBeautifulSubstrings(s);
console.log(result, result === expected);
