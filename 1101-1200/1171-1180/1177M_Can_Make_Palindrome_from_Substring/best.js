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
  const prefixParities = new Uint32Array(s.length + 1);

  for (let i = 1; i <= s.length; i++) {
    prefixParities[i] = prefixParities[i - 1] ^ (1 << (s.charCodeAt(i - 1) - 97));
  }

  return queries.map(([left, right, substitutions]) => {
    if (substitutions >= 13) {
      return true;
    }

    let parityMask = prefixParities[left] ^ prefixParities[right + 1];
    let unmatchedChars = 0;

    while (parityMask) {
      unmatchedChars += parityMask & 1;
      parityMask >>= 1;
    }

    return unmatchedChars >> 1 <= substitutions;
  });
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
