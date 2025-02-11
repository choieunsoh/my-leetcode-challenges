// 1910. Remove All Occurrences of a Substring
// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    while (stack.length >= part.length) {
      let found = true;
      const startIndex = stack.length - part.length;
      for (let partIndex = 0; partIndex < part.length; partIndex++) {
        if (stack[startIndex + partIndex] !== part[partIndex]) {
          found = false;
          break;
        }
      }

      if (!found) break;

      for (let partIndex = 0; partIndex < part.length; partIndex++) {
        stack.pop();
      }
    }
  }
  return stack.join('');
};

var s = 'daabcbaabcbc',
  part = 'abc';
var expected = 'dab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);

var s = 'axxxxyyyyb',
  part = 'xy';
var expected = 'ab';
var result = removeOccurrences(s, part);
console.log(result, result === expected);
