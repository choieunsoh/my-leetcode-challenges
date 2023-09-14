// 288. Unique Word Abbreviation
// https://leetcode.com/problems/unique-word-abbreviation/
/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
  this.abbrMap = new Map();
  for (const word of dictionary) {
    const abbr = this.toAbbr(word);
    if (!this.abbrMap.has(abbr)) {
      this.abbrMap.set(abbr, new Set());
    }
    this.abbrMap.get(abbr).add(word);
  }
};

ValidWordAbbr.prototype.toAbbr = function (word) {
  if (word.length < 3) return word;
  return `${word.charAt(0)}${word.length - 2}${word.charAt(word.length - 1)}`;
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const abbr = this.toAbbr(word);
  if (!this.abbrMap.has(abbr)) return true;

  const wordSet = this.abbrMap.get(abbr);
  return wordSet.has(word) && wordSet.size === 1;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */

var ops = ['ValidWordAbbr', 'isUnique', 'isUnique', 'isUnique', 'isUnique', 'isUnique'];
var inputs = [
  [['deer', 'door', 'cake', 'card', 'ab', 'a']],
  ['dear'],
  ['cart'],
  ['cane'],
  ['make'],
  ['cake'],
  ['ab'],
  ['bc'],
  ['a'],
  ['z'],
];
var outputs = [null, false, true, false, true, true, true, true, true, true];
var obj = null;
for (let i = 0; i < inputs.length; i++) {
  if (ops[i] === 'ValidWordAbbr') {
    obj = new ValidWordAbbr(inputs[i][0]);
  } else {
    const result = obj.isUnique(inputs[i][0]);
    console.log(i, result, result === outputs[i]);
  }
}
