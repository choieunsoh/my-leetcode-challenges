// 2085. Count Common Words With One Occurrence
// https://leetcode.com/problems/count-common-words-with-one-occurrence/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const seen1 = new Map();
  for (const word of words1) {
    seen1.set(word, (seen1.get(word) ?? 0) + 1);
  }
  const seen2 = new Map();
  for (const word of words2) {
    seen2.set(word, (seen2.get(word) ?? 0) + 1);
  }

  let count = 0;
  for (const [word1, count1] of seen1) {
    if (seen2.has(word1) && count1 === 1) {
      const count2 = seen2.get(word1);
      if (count2 === 1) {
        count++;
      }
    }
  }
  return count;
};

var words1 = ['leetcode', 'is', 'amazing', 'as', 'is'],
  words2 = ['amazing', 'leetcode', 'is'];
var expected = 2;
var result = countWords(words1, words2);
console.log(result, result === expected);

var words1 = ['b', 'bb', 'bbb'],
  words2 = ['a', 'aa', 'aaa'];
var expected = 0;
var result = countWords(words1, words2);
console.log(result, result === expected);

var words1 = ['a', 'ab'],
  words2 = ['a', 'a', 'a', 'ab'];
var expected = 1;
var result = countWords(words1, words2);
console.log(result, result === expected);
