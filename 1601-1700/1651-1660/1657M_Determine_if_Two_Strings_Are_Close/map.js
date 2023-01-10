// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    let count = map1.get(word1[i]) ?? 0;
    map1.set(word1[i], count + 1);
    count = map2.get(word2[i]) ?? 0;
    map2.set(word2[i], count + 1);
  }
  const letter1 = [...map1.keys()].sort().join('');
  const letter2 = [...map2.keys()].sort().join('');
  const count1 = [...map1.values()].sort().join('');
  const count2 = [...map2.values()].sort().join('');

  return letter1 === letter2 && count1 === count2;
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
