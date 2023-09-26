// 316. Remove Duplicate Letters
// https://leetcode.com/problems/remove-duplicate-letters
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const seen = new Set();
  const lastLetter = new Map();
  for (let i = 0; i < s.length; i++) {
    lastLetter.set(s[i], i);
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (seen.has(ch)) continue;

    let peekLetter = stack[stack.length - 1];
    let lastPeekLetterIndex = lastLetter.get(peekLetter);
    while (stack.length && ch < peekLetter && lastPeekLetterIndex > i) {
      const removedCh = stack.pop();
      seen.delete(removedCh);
      peekLetter = stack[stack.length - 1];
      lastPeekLetterIndex = lastLetter.get(peekLetter);
    }
    seen.add(ch);
    stack.push(ch);
  }

  return stack.join('');
};

var s = 'bcabc';
var expected = 'abc';
var result = removeDuplicateLetters(s);
console.log(result, result === expected);

var s = 'cbacdcbc';
var expected = 'acdb';
var result = removeDuplicateLetters(s);
console.log(result, result === expected);
