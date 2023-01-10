// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 97]++;
    count2[word2.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (
      (count1[i] == 0 && count2[i] > 0) ||
      (count1[i] > 0 && count2[i] == 0)
    ) {
      return false;
    }
  }

  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);

  return count1.every((c, i) => c == count2[i]);
};

var word1 = 'abc',
  word2 = 'bca';
var expected = true;
var result = closeStrings(word1, word2);
console.log(result, result === expected);

var word1 = 'a',
  word2 = 'aa';
var expected = false;
var result = closeStrings(word1, word2);
console.log(result, result === expected);

var word1 = 'cabbba',
  word2 = 'abbccc';
var expected = true;
var result = closeStrings(word1, word2);
console.log(result, result === expected);
