// 1880. Check if Word Equals Summation of Two Words
// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const firstValue = toValue(firstWord);
  const secondValue = toValue(secondWord);
  const targetValue = toValue(targetWord);
  return firstValue + secondValue === targetValue;

  function toValue(word) {
    let value = '';
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < word.length; i++) {
      value += word.charCodeAt(i) - a + '';
    }
    return Number(value);
  }
};

var firstWord = 'acb',
  secondWord = 'cba',
  targetWord = 'cdb';
var expected = true;
var result = isSumEqual(firstWord, secondWord, targetWord);
console.log(result, result === expected);

var firstWord = 'aaa',
  secondWord = 'a',
  targetWord = 'aab';
var expected = false;
var result = isSumEqual(firstWord, secondWord, targetWord);
console.log(result, result === expected);

var firstWord = 'aaa',
  secondWord = 'a',
  targetWord = 'aaaa';
var expected = true;
var result = isSumEqual(firstWord, secondWord, targetWord);
console.log(result, result === expected);
