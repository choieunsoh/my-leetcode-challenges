// 524. Longest Word in Dictionary through Deleting
// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let result = '';
  for (const word of dictionary) {
    if (isSubsequence(word, s)) {
      if (word.length === result.length && word < result) {
        result = word;
      } else if (word.length > result.length) {
        result = word;
      }
    }
  }
  return result;

  function isSubsequence(shortWord, longWord) {
    let i = 0;
    for (let j = 0; i < shortWord.length && j < longWord.length; j++) {
      if (shortWord.charAt(i) === longWord.charAt(j)) {
        i++;
      }
    }
    return i === shortWord.length;
  }
};

var s = 'abpcplea',
  dictionary = ['ale', 'apple', 'monkey', 'plea'];
var expected = 'apple';
var result = findLongestWord(s, dictionary);
console.log(result, result === expected);

var s = 'abpcplea',
  dictionary = ['a', 'b', 'c'];
var expected = 'a';
var result = findLongestWord(s, dictionary);
console.log(result, result === expected);
