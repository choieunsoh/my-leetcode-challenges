// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/
// T.C.: O(n+w*m)
// S.C.: O(n)
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  // Split the sentence into words
  const words = sentence.split(' ');
  // Iterate over the words with their positions
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    // Check if the current word is long enough to contain the searchWord as a prefix
    // and if the prefix matches the searchWord
    if (currentWord.length >= searchWord.length && currentWord.startsWith(searchWord)) {
      // If a match is found, return the current word position (adjusted to 1-based index)
      return i + 1;
    }
  }
  // If no match is found, return -1
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
