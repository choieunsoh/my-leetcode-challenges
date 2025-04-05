// 246. Strobogrammatic Number
// https://leetcode.com/problems/strobogrammatic-number/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  let rotatedString = '';
  for (let i = num.length - 1; i >= 0; i--) {
    const c = num.charAt(i);
    if (c === '0' || c === '1' || c === '8') {
      rotatedString += c;
    } else if (c === '6') {
      rotatedString += '9';
    } else if (c === '9') {
      rotatedString += '6';
    } else {
      return false;
    }
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
