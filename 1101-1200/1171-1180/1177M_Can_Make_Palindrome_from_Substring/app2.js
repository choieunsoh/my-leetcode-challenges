// 1177. Can Make Palindrome from Substring
// https://leetcode.com/problems/can-make-palindrome-from-substring/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const record = [];
  const a = 'a'.charCodeAt(0);
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt(0) - a;
    // toggle code-th bit
    // to 1: mean odd count
    // to 0: mean even count
    n = n ^ (1 << code);
    record[i] = n;
  }
  const result = [];
  for (const [start, end, maxDiff] of queries) {
    let singleCharCount = 0;
    const beforeStart = start === 0 ? 0 : record[start - 1];
    const atEnd = record[end];
    for (let i = 0; i < 26; i++) {
      const mask = 1 << i;
      const isOddBeforeStart = (beforeStart & mask) !== 0;
      const isOddAtEnd = (atEnd & mask) !== 0;
      if (isOddBeforeStart !== isOddAtEnd) {
        singleCharCount += 1;
      }
    }
    if ((end - start + 1) % 2 === 1) {
      singleCharCount -= 1;
    }
    // need the odd/even of each char between start and end
    // using one change, we can remove 2 single chars
    if (singleCharCount <= maxDiff * 2) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

var s = 'abcda',
  queries = [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ];
var expected = [true, false, false, true, true];
var result = canMakePaliQueries(s, queries);
console.log(result, result.join() === expected.join());

var s = 'lyb',
  queries = [
    [0, 1, 0],
    [2, 2, 1],
  ];
var expected = [false, true];
var result = canMakePaliQueries(s, queries);
console.log(result, result.join() === expected.join());
