// https://leetcode.com/problems/detect-capital/
// 520. Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const allUpper = word.toUpperCase() === word;
  const allLower = word.toLowerCase() === word;
  const capital =
    word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  const validCapital = capital === word;
  return allUpper || allLower || validCapital;
};

var word = 'USA';
var expected = true;
var result = detectCapitalUse(word);
console.log(result, result === expected);

var word = 'FlaG';
var expected = false;
var result = detectCapitalUse(word);
console.log(result, result === expected);
