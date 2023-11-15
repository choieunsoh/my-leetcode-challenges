// 1156. Swap For Longest Repeated Character Substring
// https://leetcode.com/problems/swap-for-longest-repeated-character-substring/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i) - a;
    counts[code]++;
  }

  let result = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 0) continue;
    const char = String.fromCharCode(i + a);
    const max = findMax(char);
    result = Math.max(result, Math.min(counts[i], max));
  }

  return result;

  function findMax(char) {
    let result = 0;
    let count = 0;
    let i = 0;
    for (let j = 0; j < text.length; j++) {
      if (text.charAt(j) !== char) {
        count++;
      }
      while (i <= j && count > 1) {
        if (text.charAt(i++) !== char) count--;
      }
      result = Math.max(result, j - i + 1);
    }
    return result;
  }
};

var text = 'abababb';
var expected = 4;
var result = maxRepOpt1(text);
console.log(result, result === expected);

var text = 'ababa';
var expected = 3;
var result = maxRepOpt1(text);
console.log(result, result === expected);

var text = 'ababab';
var expected = 3;
var result = maxRepOpt1(text);
console.log(result, result === expected);

var text = 'aaabaaa';
var expected = 6;
var result = maxRepOpt1(text);
console.log(result, result === expected);

var text = 'aaaaa';
var expected = 5;
var result = maxRepOpt1(text);
console.log(result, result === expected);

var text = 'abcdef';
var expected = 1;
var result = maxRepOpt1(text);
console.log(result, result === expected);
