// 1544. Make The String Great
// https://leetcode.com/problems/make-the-string-great/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];
  const diff = 'a'.charCodeAt() - 'A'.charCodeAt();
  for (let i = 0; i < s.length; i++) {
    if (stack.length && Math.abs(stack.at(-1).charCodeAt() - s.charCodeAt(i)) === diff) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

var s = 'leEeetcode';
var expected = 'leetcode';
var result = makeGood(s);
console.log(result, result === expected);

var s = 'abBAcC';
var expected = '';
var result = makeGood(s);
console.log(result, result === expected);

var s = 's';
var expected = 's';
var result = makeGood(s);
console.log(result, result === expected);
