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

  let [firstChar, secondChar] = s;
  let result = firstChar + secondChar;
  for (let i = 2; i < s.length; i++) {
    const char = s[i];
    if (char === firstChar && char === secondChar) continue;
    firstChar = secondChar;
    secondChar = char;
    result += char;
  }
  return result;
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
