// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length && stack.at(-1) === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
};

var s = 'abbaca';
var expected = 'ca';
var result = removeDuplicates(s);
console.log(result, result === expected);

var s = 'azxxzy';
var expected = 'ay';
var result = removeDuplicates(s);
console.log(result, result === expected);

var s = 'aaaaa';
var expected = 'a';
var result = removeDuplicates(s);
console.log(result, result === expected);

var s = 'abcdef';
var expected = 'abcdef';
var result = removeDuplicates(s);
console.log(result, result === expected);
