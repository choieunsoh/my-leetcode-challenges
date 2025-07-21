// 1957. Delete Characters to Make Fancy String
// https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) return s;

  const n = s.length;
  s = s.split('');
  let left = 2;
  let right = 2;
  while (right < n) {
    if (s[right] !== s[left - 1] || s[right] !== s[left - 2]) {
      s[left++] = s[right];
    }
    right++;
  }
  s.length = left;
  return s.join('');
};

var s = 'leeetcode';
var expected = 'leetcode';
var result = makeFancyString(s);
console.log(result, result === expected);

var s = 'aaabaaaa';
var expected = 'aabaa';
var result = makeFancyString(s);
console.log(result, result === expected);

var s = 'aab';
var expected = 'aab';
var result = makeFancyString(s);
console.log(result, result === expected);
