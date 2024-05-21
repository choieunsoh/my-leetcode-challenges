// 408. Valid Word Abbreviation
// https://leetcode.com/problems/valid-word-abbreviation/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let wordIndex = 0;
  let abbrIndex = 0;
  while (abbrIndex < abbr.length && wordIndex < word.length) {
    if (abbr[abbrIndex] === word[wordIndex]) {
      abbrIndex++;
      wordIndex++;
      continue;
    }

    if (abbr[abbrIndex] === '0' || !isNumber(abbr[abbrIndex])) return false;

    let len = '';
    while (abbrIndex < abbr.length && isNumber(abbr[abbrIndex])) {
      len += abbr[abbrIndex];
      abbrIndex++;
    }

    wordIndex += Number(len);
  }

  return wordIndex === word.length && abbrIndex === abbr.length;

  function isNumber(c) {
    return c >= '0' && c <= '9';
  }
};

var word = 'internationalization',
  abbr = 'i12iz4n';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'apple',
  abbr = 'a2e';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'internationalization',
  abbr = 'i012iz4n';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'apple',
  abbr = 'apple';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 's10n';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 'sub4u4';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = '12';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 'su3i1u2on';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 's55n';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 's010n';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'substitution',
  abbr = 's0ubstitution';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'a',
  abbr = '2';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'a',
  abbr = '1';
var expected = true;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);

var word = 'ab',
  abbr = 'a';
var expected = false;
var result = validWordAbbreviation(word, abbr);
console.log(result, result === expected);
