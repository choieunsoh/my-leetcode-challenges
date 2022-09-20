// https://leetcode.com/problems/buddy-strings/
// 859. Buddy Strings
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  if (s === goal) {
    const seen = new Set(s);
    return seen.size < s.length;
  }

  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (diff.length === 2) return false;
      diff.push(i);
    }
  }

  const [first, second] = diff;
  if (s[first] === goal[second] && s[second] === goal[first]) return true;

  return false;
};

var s = 'ab',
  goal = 'ba';
var expected = true;
var result = buddyStrings(s, goal);
console.log(result, result === expected);

var s = 'ab',
  goal = 'ab';
var expected = false;
var result = buddyStrings(s, goal);
console.log(result, result === expected);

var s = 'aa',
  goal = 'aa';
var expected = true;
var result = buddyStrings(s, goal);
console.log(result, result === expected);
