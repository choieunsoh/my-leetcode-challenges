// 2559. Count Vowel Strings in Ranges
// https://leetcode.com/problems/count-vowel-strings-in-ranges/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const prefix = new Array(words.length + 1).fill(0);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const first = word[0];
    const last = word[word.length - 1];
    const valid = vowels.has(first) && vowels.has(last) ? 1 : 0;
    prefix[i + 1] = prefix[i] + valid;
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i];
    const count = prefix[right + 1] - prefix[left];
    result.push(count);
  }
  return result;
};

var words = ['aba', 'bcb', 'ece', 'aa', 'e'],
  queries = [
    [0, 2],
    [1, 4],
    [1, 1],
  ];
var expected = [2, 3, 0];
var result = vowelStrings(words, queries);
console.log(result, result.join() === expected.join());

var words = ['a', 'e', 'i'],
  queries = [
    [0, 2],
    [0, 1],
    [2, 2],
  ];
var expected = [3, 2, 1];
var result = vowelStrings(words, queries);
console.log(result, result.join() === expected.join());
