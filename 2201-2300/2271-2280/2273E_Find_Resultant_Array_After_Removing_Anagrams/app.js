// 2273. Find Resultant Array After Removing Anagrams
// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  if (words.length === 0) return [];

  const a = 'a'.charCodeAt(0);
  const result = [words[0]];
  let prevKey = getKey(words[0]);
  for (let i = 1; i < words.length; i++) {
    const currKey = getKey(words[i]);
    if (currKey !== prevKey) {
      result.push(words[i]);
      prevKey = currKey;
    }
  }
  return result;

  function getKey(word) {
    const counts = new Array(26).fill(0);
    for (const char of word) {
      counts[char.charCodeAt(0) - a]++;
    }
    return counts.join();
  }
};

var words = ['abba', 'baba', 'bbaa', 'cd', 'cd'];
var expected = ['abba', 'cd'];
var result = removeAnagrams(words);
console.log(result, result.join() === expected.join());

var words = ['a', 'b', 'c', 'd', 'e'];
var expected = ['a', 'b', 'c', 'd', 'e'];
var result = removeAnagrams(words);
console.log(result, result.join() === expected.join());

var words = ['a', 'b', 'a'];
var expected = ['a', 'b', 'a'];
var result = removeAnagrams(words);
console.log(result, result.join() === expected.join());
