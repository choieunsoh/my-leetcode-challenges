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

  let index = 0;
  while (index < haystackLen) {
    while (index < haystackLen && haystack[index] !== needle[0]) index++;

    if (haystack.slice(index, index + needleLen) === needle) {
      return index;
    }

    index++;
  }

  return -1;
};

var haystack = 'hello',
  needle = 'll',
  expect = 2;
console.log(strStr(haystack, needle), expect);
var haystack = 'aaaaa',
  needle = 'bba',
  expect = -1;
console.log(strStr(haystack, needle), expect);
