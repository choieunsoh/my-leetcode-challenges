// https://leetcode.com/problems/goat-latin/
// 824. Goat Latin
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = sentence.split(' ');
  let addedA = 'a';
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i][0].toLowerCase())) {
      words[i] += 'ma';
    } else {
      words[i] = words[i].slice(1) + words[i][0] + 'ma';
    }
    words[i] += addedA;
    addedA += 'a';
  }
  return words.join(' ');
};

var sentence = 'I speak Goat Latin';
var expected = 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa';
var result = toGoatLatin(sentence);
console.log(result, result === expected);

var sentence = 'The quick brown fox jumped over the lazy dog';
var expected =
  'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa';
var result = toGoatLatin(sentence);
console.log(result, result === expected);
