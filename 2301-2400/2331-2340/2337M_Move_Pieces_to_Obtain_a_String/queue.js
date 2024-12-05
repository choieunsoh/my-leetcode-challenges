// 2337. Move Pieces to Obtain a String
// https://leetcode.com/problems/move-pieces-to-obtain-a-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const length = start.length;
  const startQueue = [];
  const targetQueue = [];

  for (let i = 0; i < length; i++) {
    if (start.charAt(i) !== '_') startQueue.push([start.charAt(i), i]);
    if (target.charAt(i) !== '_') targetQueue.push([target.charAt(i), i]);
  }

  if (startQueue.length !== targetQueue.length) return false;

  while (startQueue.length) {
    const [startChar, startIndex] = startQueue.pop();
    const [targetChar, targetIndex] = targetQueue.pop();
    if (
      startChar !== targetChar ||
      (startChar === 'L' && startIndex < targetIndex) ||
      (startChar === 'R' && startIndex > targetIndex)
    ) {
      return false;
    }
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
