// 2337. Move Pieces to Obtain a String
// https://leetcode.com/problems/move-pieces-to-obtain-a-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const startLength = start.length;
  let startIndex = 0;
  let targetIndex = 0;

  while (startIndex < startLength || targetIndex < startLength) {
    while (startIndex < startLength && start.charAt(startIndex) === '_') {
      startIndex++;
    }
    while (targetIndex < startLength && target.charAt(targetIndex) === '_') {
      targetIndex++;
    }

    if (startIndex === startLength || targetIndex === startLength) {
      return startIndex === startLength && targetIndex === startLength;
    }

    const startChar = start.charAt(startIndex);
    const targetChar = target.charAt(targetIndex);
    if (startChar !== targetChar) return false;
    if (startChar === 'L' && startIndex < targetIndex) return false;
    if (startChar === 'R' && startIndex > targetIndex) return false;

    startIndex++;
    targetIndex++;
  }

  return true;
};

var start = '_L__R__R_',
  target = 'L______RR';
var expected = true;
var result = canChange(start, target);
console.log(result, result === expected);

var start = 'R_L_',
  target = '__LR';
var expected = false;
var result = canChange(start, target);
console.log(result, result === expected);

var start = '_R',
  target = 'R_';
var expected = false;
var result = canChange(start, target);
console.log(result, result === expected);
