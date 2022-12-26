// 91. Decode Ways
// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;

  let one = 1;
  let two = 1;
  for (let i = 2; i <= s.length; i++) {
    let count = 0;
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigits = Number(s.slice(i - 2, i));
    if (oneDigit >= 1 && oneDigit <= 9) {
      count += one;
    }
    if (twoDigits >= 10 && twoDigits <= 26) {
      count += two;
    }

    two = one;
    one = count;
  }
  return one;
};

var s = '12';
var expected = 2;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '226';
var expected = 3;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '06';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '30';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '330';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '31';
var expected = 1;
var result = numDecodings(s);
console.log(result, result === expected);
