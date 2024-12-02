// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let sentenceIndex = 0;
  let wordIndex = 1;
  while (sentenceIndex < sentence.length) {
    if (sentence[sentenceIndex] === ' ') {
      wordIndex++;
      sentenceIndex++;
      continue;
    }

    let searchIndex = 0;
    while (
      sentenceIndex < sentence.length &&
      searchIndex < searchWord.length &&
      sentence[sentenceIndex] === searchWord[searchIndex]
    ) {
      sentenceIndex++;
      searchIndex++;
    }

    if (searchIndex === searchWord.length) {
      return wordIndex;
    }

    while (sentenceIndex < sentence.length && sentence[sentenceIndex] !== ' ') {
      sentenceIndex++;
    }
  }
  return -1;
};

var sentence = 'i love eating burger',
  searchWord = 'burg';
var expected = 4;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'this problem is an easy problem',
  searchWord = 'pro';
var expected = 2;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i am tired',
  searchWord = 'you';
var expected = -1;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i am tired',
  searchWord = 'tim';
var expected = -1;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i am tired',
  searchWord = 'i';
var expected = 1;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i am tired',
  searchWord = 'a';
var expected = 2;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i am tired',
  searchWord = 'm';
var expected = -1;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i love eating burger',
  searchWord = 'burgers';
var expected = -1;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'i love eating burger',
  searchWord = 'love';
var expected = 2;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'love errichto jonathan dumb',
  searchWord = 'dumb';
var expected = 4;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);

var sentence = 'b bu bur burg burger',
  searchWord = 'burg';
var expected = 4;
var result = isPrefixOfWord(sentence, searchWord);
console.log(result, result === expected);
