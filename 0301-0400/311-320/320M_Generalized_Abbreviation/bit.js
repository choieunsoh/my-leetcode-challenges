// 320. Generalized Abbreviation
// https://leetcode.com/problems/generalized-abbreviation/description/
// T.C.: O(n*2^n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
  const N = word.length;
  const abbreviations = [];

  for (let mask = 0; mask < 1 << N; mask++) {
    let currWord = '';
    let abbreviatedCount = 0;

    for (let index = 0; index < N; index++) {
      // If the bit at position index is 1, increment the abbreviated substring.
      if ((mask & (1 << index)) !== 0) {
        abbreviatedCount++;
      } else {
        // Append the last substring and then the current character.
        if (abbreviatedCount > 0) {
          currWord += abbreviatedCount;
          abbreviatedCount = 0;
        }
        currWord += word[index];
      }
    }

    if (abbreviatedCount > 0) {
      currWord += abbreviatedCount;
    }
    abbreviations.push(currWord);
  }

  return abbreviations;
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
