// 2434. Using a Robot to Print the Lexicographically Smallest String
// https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (const c of s) {
    counts[c.charCodeAt(0) - a]++;
  }

  let result = '';
  let minCharIndex = 0;
  const stack = [];
  for (const c of s) {
    const charIndex = c.charCodeAt(0) - a;
    counts[charIndex]--;
    stack.push(charIndex);

    while (minCharIndex < 26 && counts[minCharIndex] === 0) {
      minCharIndex++;
    }

    while (stack.length > 0 && stack[stack.length - 1] <= minCharIndex) {
      result += String.fromCharCode(stack.pop() + a);
    }
  }

  return result;
};

var s = 'zza';
var expected = 'azz';
var result = robotWithString(s);
console.log(result, result === expected);

var s = 'bac';
var expected = 'abc';
var result = robotWithString(s);
console.log(result, result === expected);

var s = 'bdda';
var expected = 'addb';
var result = robotWithString(s);
console.log(result, result === expected);

var s = 'aedbdaccb';
var expected = 'aabccdbde';
var result = robotWithString(s);
console.log(result, result === expected);
