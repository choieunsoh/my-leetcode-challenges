// 2515. Shortest Distance to Target String in a Circular Array
// https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {
  const n = words.length;
  for (let steps = 0; steps <= n / 2; steps++) {
    const next = words[(startIndex + steps) % n];
    const prev = words[(startIndex - steps + n) % n];
    if (prev === target || next === target) {
      return steps;
    }
  }
  return -1;
};

var words = ['hello', 'i', 'am', 'leetcode', 'hello'],
  target = 'hello',
  startIndex = 1;
var expected = 1;
var result = closestTarget(words, target, startIndex);
console.log(result, result === expected);

var words = ['a', 'b', 'leetcode'],
  target = 'leetcode',
  startIndex = 0;
var expected = 1;
var result = closestTarget(words, target, startIndex);
console.log(result, result === expected);

var words = ['i', 'eat', 'leetcode'],
  target = 'ate',
  startIndex = 0;
var expected = -1;
var result = closestTarget(words, target, startIndex);
console.log(result, result === expected);

var words = [
    'ibkgecmeyx',
    'jsdkekkjsb',
    'gdjgdtjtrs',
    'jsdkekkjsb',
    'jsdkekkjsb',
    'jsdkekkjsb',
    'gdjgdtjtrs',
    'msjlfpawbx',
    'pbgjhutcwb',
    'gdjgdtjtrs',
  ],
  target = 'pbgjhutcwb',
  startIndex = 0;
var expected = 2;
var result = closestTarget(words, target, startIndex);
console.log(result, result === expected);

var words = [
    'pgmiltbptl',
    'jnkxwutznb',
    'bmeirwjars',
    'ugzyaufzzp',
    'pgmiltbptl',
    'sfhtxkmzwn',
    'pgmiltbptl',
    'pgmiltbptl',
    'onvmgvjhxa',
    'jyzdtwbwqp',
  ],
  target = 'pgmiltbptl',
  startIndex = 4;
var expected = 0;
var result = closestTarget(words, target, startIndex);
console.log(result, result === expected);
