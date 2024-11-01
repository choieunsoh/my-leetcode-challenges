// 1957. Delete Characters to Make Fancy String
// https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) return s;

  let [first, second] = s;
  let result = first + second;
  for (let i = 2; i < s.length; i++) {
    if (s[i] === first && s[i] === second) continue;
    first = second;
    second = s[i];
    result += s[i];
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
