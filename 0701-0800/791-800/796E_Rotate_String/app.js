// 796. Rotate String
// https://leetcode.com/problems/rotate-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  goal += goal;
  return goal.includes(s);
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
