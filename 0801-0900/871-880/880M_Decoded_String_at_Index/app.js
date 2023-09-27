// 880. Decoded String at Index
// https://leetcode.com/problems/decoded-string-at-index
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let length = 0;
  let i = 0;

  while (length < k) {
    if (!isNaN(s[i])) {
      length *= Number(s[i]);
    } else {
      length++;
    }
    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(s[j])) {
      length /= Number(s[j]);
      k %= length;
    } else {
      if (k === 0 || k === length) {
        return s[j];
      }
      length--;
    }
  }

  return '';
};

var s = 'leet2code3',
  k = 10;
var expected = 'o';
var result = decodeAtIndex(s, k);
console.log(result, result === expected);

var s = 'leet2code3',
  k = 2;
var expected = 'e';
var result = decodeAtIndex(s, k);
console.log(result, result === expected);

var s = 'ha22',
  k = 5;
var expected = 'h';
var result = decodeAtIndex(s, k);
console.log(result, result === expected);

var s = 'a2345678999999999999999',
  k = 1;
var expected = 'a';
var result = decodeAtIndex(s, k);
console.log(result, result === expected);
