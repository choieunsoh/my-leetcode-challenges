// https://leetcode.com/problems/detect-capital/
// 520. Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  function isCapital(ch) {
    return ch >= 'A' && ch <= 'Z';
  }

  const firstCapital = isCapital(word[0]);
  let allCapital = true;
  let anyCapital = false;
  for (let i = 1; i < word.length; i++) {
    if (isCapital(word[i])) {
      anyCapital = true;
    } else {
      allCapital = false;
    }
  }
  const capital = firstCapital === true && anyCapital === false;
  const upper = firstCapital === true && allCapital === true;
  const lower = firstCapital === false && anyCapital === false;
  return capital || lower || upper;
};

var word = 'USA';
var expected = true;
var result = detectCapitalUse(word);
console.log(result, result === expected);

var word = 'FlaG';
var expected = false;
var result = detectCapitalUse(word);
console.log(result, result === expected);
