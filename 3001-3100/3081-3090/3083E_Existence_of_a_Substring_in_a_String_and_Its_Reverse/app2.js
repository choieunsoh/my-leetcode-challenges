// 3083. Existence of a Substring in a String and Its Reverse
// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const seen = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    const str = s[i] + s[i + 1];
    seen.add(str);
  }
  for (let i = s.length - 1; i >= 1; i--) {
    const str = s[i] + s[i - 1];
    if (seen.has(str)) {
      return true;
    }
  }
  return false;
};

var s = 'leetcode';
var expected = true;
var result = isSubstringPresent(s);
console.log(result, result === expected);

var s = 'abcba';
var expected = true;
var result = isSubstringPresent(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = false;
var result = isSubstringPresent(s);
console.log(result, result === expected);
