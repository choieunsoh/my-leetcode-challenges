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

  const result = [];
  const stack = [];
  let minChar = 'a';
  for (const c of s) {
    counts[c.charCodeAt(0) - a]--;
    stack.push(c);

    while (minChar !== 'z' && counts[minChar.charCodeAt(0) - a] === 0) {
      minChar = String.fromCharCode(minChar.charCodeAt(0) + 1);
    }

    while (stack.length > 0 && stack[stack.length - 1] <= minChar) {
      result.push(stack.pop());
    }
  }

  return result.join('');
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
