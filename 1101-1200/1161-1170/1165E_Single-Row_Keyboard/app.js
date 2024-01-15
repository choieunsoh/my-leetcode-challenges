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
  const map = new Array(26);
  const a = 'a'.charCodeAt();
  for (let i = 0; i < keyboard.length; i++) {
    map[keyboard.charCodeAt(i) - a] = i;
  }

  let result = 0;
  for (let i = 0; i < word.length; i++) {
    const prevIndex = map[word.charCodeAt(i - 1) - a] ?? 0;
    const currIndex = map[word.charCodeAt(i) - a];
    result += Math.abs(currIndex - prevIndex);
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
