// 2810. Faulty Keyboard
// https://leetcode.com/problems/faulty-keyboard/
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let result = [];
  for (const ch of s) {
    if (ch === 'i') {
      result = result.reverse();
    } else {
      result.push(ch);
    }
  }
  return result.join('');
};

var s = 'string';
var expected = 'rtsng';
var result = finalString(s);
console.log(result, result === expected);

var s = 'poiinter';
var expected = 'ponter';
var result = finalString(s);
console.log(result, result === expected);
