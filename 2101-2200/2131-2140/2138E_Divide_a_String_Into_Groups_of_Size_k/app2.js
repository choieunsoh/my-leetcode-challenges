// 2138. Divide a String Into Groups of Size k
// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const result = [];
  let group = '';
  for (const ch of s) {
    group += ch;
    if (group.length === k) {
      result.push(group);
      group = '';
    }
  }
  if (group.length > 0) {
    while (group.length < k) {
      group += fill;
    }
    result.push(group);
  }
  return result;
};

var s = 'abcdefghi',
  k = 3,
  fill = 'x';
var expected = ['abc', 'def', 'ghi'];
var result = divideString(s, k, fill);
console.log(result, result.join() === expected.join());

var s = 'abcdefghij',
  k = 3,
  fill = 'x';
var expected = ['abc', 'def', 'ghi', 'jxx'];
var result = divideString(s, k, fill);
console.log(result, result.join() === expected.join());
