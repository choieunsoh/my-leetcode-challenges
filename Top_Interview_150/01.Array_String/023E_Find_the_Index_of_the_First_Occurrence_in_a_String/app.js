// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  const haystackLen = haystack.length;
  const needleLen = needle.length;
  for (let windowIndex = 0; windowIndex <= haystackLen - needleLen; windowIndex++) {
    for (let needleIndex = 0; needleIndex < needleLen; needleIndex++) {
      if (haystack[windowIndex + needleIndex] !== needle[needleIndex]) break;
      if (needleIndex === needleLen - 1) return windowIndex;
    }
  }
  return -1;
};

var haystack = 'hello',
  needle = 'll',
  expected = 2;
var result = strStr(haystack, needle);
console.log(result, result === expected);

var haystack = 'aaaaa',
  needle = 'bba',
  expected = -1;
var result = strStr(haystack, needle);
console.log(result, result === expected);
