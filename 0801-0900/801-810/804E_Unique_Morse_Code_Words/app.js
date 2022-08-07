// https://leetcode.com/problems/unique-morse-code-words/
// 804. Unique Morse Code Words
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const uniqueMorseCode = new Set();
  for (let i = 0; i < words.length; i++) {
    const morseCode = words[i]
      .split('')
      .map((char) => morse[char.charCodeAt(0) - 97])
      .join('');
    uniqueMorseCode.add(morseCode);
  }

  return uniqueMorseCode.size;
};

var words = ['gin', 'zen', 'gig', 'msg'];
var expected = 2;
var actual = uniqueMorseRepresentations(words);
console.log(actual, actual === expected);

var words = ['a'];
var expected = 1;
var actual = uniqueMorseRepresentations(words);
console.log(actual, actual === expected);
