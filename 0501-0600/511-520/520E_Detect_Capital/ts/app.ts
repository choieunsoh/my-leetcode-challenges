// https://leetcode.com/problems/detect-capital/
// 520. Detect Capital
var detectCapitalUse = function (word: string): boolean {
  function isCapital(index: number): boolean {
    const code = word.charCodeAt(index);
    return code >= 65 && code <= 90;
  }

  const firstIsCapital = isCapital(0);
  let anyCapital = false;
  let allCapital = true;
  for (let i = 1; i < word.length; i++) {
    if (isCapital(i)) {
      anyCapital = true;
    } else {
      allCapital = false;
    }
  }

  const capital = firstIsCapital && !anyCapital;
  const lower = !firstIsCapital && !anyCapital;
  const upper = firstIsCapital && allCapital;
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
