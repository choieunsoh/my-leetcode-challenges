// 320. Generalized Abbreviation
// https://leetcode.com/problems/generalized-abbreviation/description/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
  const abbreviations = [];
  generateAbbr('', 0, 0);
  return abbreviations;

  function generateAbbr(currentWord, index, abbrLength) {
    const lengthStr = abbrLength > 0 ? abbrLength.toString() : '';
    if (index === word.length) {
      abbreviations.push(currentWord + lengthStr);
      return;
    }

    generateAbbr(currentWord, index + 1, abbrLength + 1);
    generateAbbr(currentWord + lengthStr + word.charAt(index), index + 1, 0);
  }
};

var word = 'word';
var expected = [
  '4',
  '3d',
  '2r1',
  '2rd',
  '1o2',
  '1o1d',
  '1or1',
  '1ord',
  'w3',
  'w2d',
  'w1r1',
  'w1rd',
  'wo2',
  'wo1d',
  'wor1',
  'word',
];
var result = generateAbbreviations(word);
console.log(result, result.sort().join() === expected.sort().join());

var word = 'a';
var expected = ['1', 'a'];
var result = generateAbbreviations(word);
console.log(result, result.sort().join() === expected.sort().join());
