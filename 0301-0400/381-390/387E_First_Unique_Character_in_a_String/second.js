/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const found = s.indexOf(s[i]) !== s.lastIndexOf(s[i]);
    if (found === false) return i;
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
