// 1832. Check if the Sentence Is Pangram
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const a = 'a'.charCodeAt(0);
  let mask = 0;
  for (let i = 0; i < sentence.length; i++) {
    const charBit = sentence.charCodeAt(i) - a;
    mask |= 1 << charBit;
  }
  return mask === (1 << 26) - 1;
};

var sentence = 'thequickbrownfoxjumpsoverthelazydog';
var expected = true;
var result = checkIfPangram(sentence);
console.log(result, result === expected);

var sentence = 'leetcode';
var expected = false;
var result = checkIfPangram(sentence);
console.log(result, result === expected);
