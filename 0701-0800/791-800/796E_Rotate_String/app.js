// https://leetcode.com/problems/rotate-string/
// 796. Rotate String
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  const length = s.length;
  for (let i = 0; i < length; i++) {
    if (s === goal) return true;
    s = s.slice(1) + s[0];
  }
  return false;
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
