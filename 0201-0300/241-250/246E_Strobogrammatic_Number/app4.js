// 246. Strobogrammatic Number
// https://leetcode.com/problems/strobogrammatic-number/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  const rotatedDigits = ['0', '1', null, null, null, null, '9', null, '8', '6'];
  let rotatedString = '';
  for (let i = num.length - 1; i >= 0; i--) {
    const c = num.charAt(i);
    const charIndex = parseInt(c);
    if (rotatedDigits[charIndex] === null) {
      return false;
    }
    rotatedString += rotatedDigits[charIndex];
  }
  return num === rotatedString;
};

var num = '69';
var expected = true;
var result = isStrobogrammatic(num);
console.log(result, result === expected);

var num = '88';
var expected = true;
var result = isStrobogrammatic(num);
console.log(result, result === expected);

var num = '808';
var expected = true;
var result = isStrobogrammatic(num);
console.log(result, result === expected);

var num = '858';
var expected = false;
var result = isStrobogrammatic(num);
console.log(result, result === expected);

var num = '962';
var expected = false;
var result = isStrobogrammatic(num);
console.log(result, result === expected);

var num = '0';
var expected = true;
var result = isStrobogrammatic(num);
console.log(result, result === expected);
