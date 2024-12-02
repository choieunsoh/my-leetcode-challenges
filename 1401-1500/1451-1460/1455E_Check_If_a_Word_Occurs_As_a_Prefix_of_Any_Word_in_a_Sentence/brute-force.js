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
  // List to store the words from the sentence
  const wordsList = [];
  // StringBuilder to build the current word
  let currentWord = '';

  // Iterate through each character in the sentence
  for (const character of sentence) {
    if (character !== ' ') {
      // Append the character to the current word
      currentWord += character;
    } else {
      // If we encounter a space, add the current word to the list
      if (currentWord.length > 0) {
        wordsList.push(currentWord);
        currentWord = ''; // Reset the StringBuilder
      }
    }
  }
  // Add the last word if the sentence doesn't end with a space
  if (currentWord.length > 0) {
    wordsList.push(currentWord);
  }

  // Iterate through the list of words to find the prefix match
  for (let wordIndex = 0; wordIndex < wordsList.length; wordIndex++) {
    let word = wordsList[wordIndex];
    if (word.length >= searchWord.length) {
      let isMatch = true;
      for (let charIndex = 0; charIndex < searchWord.length; charIndex++) {
        if (word.charAt(charIndex) !== searchWord.charAt(charIndex)) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        return wordIndex + 1; // Return 1-based index
      }
    }
  }
  return -1; // Return -1 if no match is found
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
