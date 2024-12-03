// 2109. Adding Spaces to a String
// https://leetcode.com/problems/adding-spaces-to-a-string/description/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let result = '';
  let sIndex = 0;
  let spaceIndex = 0;
  while (sIndex < s.length && spaceIndex < spaces.length) {
    while (sIndex < spaces[spaceIndex]) {
      result += s[sIndex++];
    }
    result += ' ';
    spaceIndex++;
  }
  result += s.substring(sIndex);
  return result;
};

var s = 'LeetcodeHelpsMeLearn',
  spaces = [8, 13, 15];
var expected = 'Leetcode Helps Me Learn';
var result = addSpaces(s, spaces);
console.log(result, result === expected);

var s = 'icodeinpython',
  spaces = [1, 5, 7, 9];
var expected = 'i code in py thon';
var result = addSpaces(s, spaces);
console.log(result, result === expected);

var s = 'spacing',
  spaces = [0, 1, 2, 3, 4, 5, 6];
var expected = ' s p a c i n g';
var result = addSpaces(s, spaces);
console.log(result, result === expected);
