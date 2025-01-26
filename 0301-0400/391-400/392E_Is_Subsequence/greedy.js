// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// T.C.: O(n + m log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // Pre-computation: build the hashmap out of the target string
  const letterIndicesTable = new Map();
  for (let i = 0; i < t.length; ++i) {
    if (!letterIndicesTable.has(t[i])) {
      letterIndicesTable.set(t[i], []);
    }
    letterIndicesTable.get(t[i]).push(i);
  }

  let currMatchIndex = -1;
  for (const letter of s) {
    if (!letterIndicesTable.has(letter)) {
      return false; // No match, early exit
    }

    let isMatched = false;
    // Greedy match with linear search
    for (const matchIndex of letterIndicesTable.get(letter)) {
      if (currMatchIndex < matchIndex) {
        currMatchIndex = matchIndex;
        isMatched = true;
        break;
      }
    }

    if (!isMatched) {
      return false;
    }
  }

  // Consume all characters in the source string
  return true;
};

var s = 'abc',
  t = 'ahbgdc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'ahbgdc';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = '',
  t = 'axc';
var expected = true;
var result = isSubsequence(s, t);
console.log(result, result === expected);

var s = 'axc',
  t = '';
var expected = false;
var result = isSubsequence(s, t);
console.log(result, result === expected);
