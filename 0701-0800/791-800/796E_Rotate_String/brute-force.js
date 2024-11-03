// 796. Rotate String
// https://leetcode.com/problems/rotate-string/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  const length = s.length;

  // Try all possible rotations of the string
  for (let rotationCount = 0; rotationCount < length; rotationCount++) {
    // Perform one rotation
    s = rotateOnce(s);
    if (s === goal) return true;
  }
  return false;

  function rotateOnce(arr) {
    const firstChar = arr[0];
    return arr.slice(1) + firstChar;
  }
};

var s = 'abcde',
  goal = 'cdeab';
var expected = true;
var result = rotateString(s, goal);
console.log(result, result === expected);

var s = 'abcde',
  goal = 'abced';
var expected = false;
var result = rotateString(s, goal);
console.log(result, result === expected);

var s = 'bbbacddceeb',
  goal = 'ceebbbbacdd';
var expected = true;
var result = rotateString(s, goal);
console.log(result, result === expected);
