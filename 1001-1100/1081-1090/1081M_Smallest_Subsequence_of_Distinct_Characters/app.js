// 1081. Smallest Subsequence of Distinct Characters
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const counts = new Map();
  for (const c of s) {
    const count = counts.get(c) ?? 0;
    counts.set(c, count + 1);
  }

  const seen = new Set();
  const stack = [];
  for (const c of s) {
    if (!seen.has(c)) {
      while (stack.length && stack[stack.length - 1] > c && counts.has(stack[stack.length - 1])) {
        const popped = stack.pop();
        seen.delete(popped);
      }
      seen.add(c);
      stack.push(c);
    }

    const count = counts.get(c);
    if (count === 1) {
      counts.delete(c);
    } else {
      counts.set(c, count - 1);
    }
  }

  return stack.join('');
};

var s = 'bcabc';
var expected = 'abc';
var result = smallestSubsequence(s);
console.log(result, result === expected);

var s = 'cbacdcbc';
var expected = 'acdb';
var result = smallestSubsequence(s);
console.log(result, result === expected);
