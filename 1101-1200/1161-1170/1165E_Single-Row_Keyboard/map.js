// 1165. Single-Row Keyboard
// https://leetcode.com/problems/single-row-keyboard/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function (keyboard, word) {
  const map = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i);
  }

  let result = map.get(word[0]);
  for (let i = 1; i < word.length; i++) {
    result += Math.abs(map.get(word[i]) - map.get(word[i - 1]));
  }
  return result;
};

var keyboard = 'abcdefghijklmnopqrstuvwxyz',
  word = 'cba';
var expected = 4;
var result = calculateTime(keyboard, word);
console.log(result, result === expected);

var keyboard = 'pqrstuvwxyzabcdefghijklmno',
  word = 'leetcode';
var expected = 73;
var result = calculateTime(keyboard, word);
console.log(result, result === expected);
