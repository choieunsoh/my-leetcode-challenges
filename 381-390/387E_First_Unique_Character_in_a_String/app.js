// https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const seen = {};
  for (let i = 0; i < s.length; i++) {
    seen[s[i]] = (seen[s[i]] ?? 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] === 1) return i;
  }

  return -1;
};

var s = 'leetcode';
var expect = 0;
var result = firstUniqChar(s);
console.log(result, result === expect);

s = 'loveleetcode';
expect = 2;
result = firstUniqChar(s);
console.log(result, result === expect);

s = 'aabb';
expect = -1;
result = firstUniqChar(s);
console.log(result, result === expect);
