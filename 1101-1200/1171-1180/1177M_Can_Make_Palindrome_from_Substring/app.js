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
  const a = 'a'.charCodeAt();
  const n = s.length;
  const map = Array.from({ length: n + 1 }, () => new Array(26).fill(0));
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 26; j++) {
      map[i + 1][j] = map[i][j];
    }
    map[i + 1][s.charCodeAt(i) - a]++;
  }

  const result = [];
  for (const [left, right, k] of queries) {
    let count = 0;
    for (let j = 0; j < 26; j++) {
      count += (map[right + 1][j] - map[left][j]) % 2;
    }
    count = (count / 2) | 0;
    result.push(count <= k);
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
