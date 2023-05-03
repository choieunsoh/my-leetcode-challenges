// 68. Text Justification
// https://leetcode.com/problems/text-justification/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = [];
  let totalWidth = 0;
  const wordsInLine = [];
  for (const word of words) {
    if (totalWidth + wordsInLine.length + word.length > maxWidth) {
      let remainSpaces = maxWidth - totalWidth;
      let remainWords = wordsInLine.length - 1;
      if (remainWords === 0) {
        result.push(wordsInLine[0].padEnd(maxWidth));
      } else {
        let i = 0;
        let text = wordsInLine[i++];
        while (remainSpaces) {
          const sp = Math.ceil(remainSpaces / remainWords--);
          text += ' '.repeat(sp) + wordsInLine[i++];
          remainSpaces -= sp;
        }
        result.push(text);
      }
      wordsInLine.length = 0;
      totalWidth = 0;
    }
    totalWidth += word.length;
    wordsInLine.push(word);
  }

  result.push(wordsInLine.join(' ').padEnd(maxWidth));
  return result;
};

var words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
  maxWidth = 16;
var expected = ['This    is    an', 'example  of text', 'justification.  '];
var result = fullJustify(words, maxWidth);
console.log(result, result.join() === expected.join());

var words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
  maxWidth = 16;
var expected = ['What   must   be', 'acknowledgment  ', 'shall be        '];
var result = fullJustify(words, maxWidth);
console.log(result, result.join() === expected.join());

var words = [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
  ],
  maxWidth = 20;
var expected = [
  'Science  is  what we',
  'understand      well',
  'enough to explain to',
  'a  computer.  Art is',
  'everything  else  we',
  'do                  ',
];
var result = fullJustify(words, maxWidth);
console.log(result, result.join() === expected.join());
