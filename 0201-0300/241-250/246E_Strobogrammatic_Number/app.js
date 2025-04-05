// 246. Strobogrammatic Number
// https://leetcode.com/problems/strobogrammatic-number/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  const strobogrammaticPairs = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    const leftChar = num[left++];
    const rightChar = num[right--];
    if (strobogrammaticPairs[leftChar] !== rightChar) return false;
  }
  return true;
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
