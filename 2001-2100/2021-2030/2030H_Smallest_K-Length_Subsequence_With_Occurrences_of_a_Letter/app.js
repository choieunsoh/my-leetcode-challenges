// 2030. Smallest K-Length Subsequence With Occurrences of a Letter
// https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/description/
// https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1903567/typescript-stack-explained-faster-than-100/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
var smallestSubsequence = function (s, k, letter, repetition) {
  let letterRemains = s.split('').filter((c) => c === letter).length;
  let letterIn = 0;
  const stack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const curr = s.charAt(i);
    let peek = stack[stack.length - 1];
    while (
      stack.length &&
      peek > curr &&
      stack.length + n - i - 1 >= k &&
      (peek !== letter || (peek === letter && letterRemains + letterIn - 1 >= repetition))
    ) {
      if (peek === letter) letterIn--;
      stack.pop();
      peek = stack[stack.length - 1];
    }

    stack.push(curr);
    if (curr === letter) {
      letterIn++;
      letterRemains--;
    }
  }

  if (stack.length === k) return stack.join('');

  let result = '';
  let looseLetters = k - repetition;
  for (let i = 0; i < stack.length; i++) {
    if (repetition && stack[i] === letter) {
      result += stack[i];
      repetition--;
    } else if (looseLetters) {
      result += stack[i];
      looseLetters--;
    }
  }
  return result;
};

var s = 'leet',
  k = 3,
  letter = 'e',
  repetition = 1;
var expected = 'eet';
var result = smallestSubsequence(s, k, letter, repetition);
console.log(result, result === expected);

var s = 'leetcode',
  k = 4,
  letter = 'e',
  repetition = 2;
var expected = 'ecde';
var result = smallestSubsequence(s, k, letter, repetition);
console.log(result, result === expected);

var s = 'bb',
  k = 2,
  letter = 'b',
  repetition = 2;
var expected = 'bb';
var result = smallestSubsequence(s, k, letter, repetition);
console.log(result, result === expected);
