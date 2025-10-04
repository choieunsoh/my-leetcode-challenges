// 3019. Number of Changing Keys
// https://leetcode.com/problems/number-of-changing-keys/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let changes = 0;
  let prevKey = s[0].toLowerCase();
  for (let i = 1; i < s.length; i++) {
    const currKey = s[i].toLowerCase();
    if (currKey !== prevKey) {
      prevKey = currKey;
      changes++;
    }
  }
  return changes;
};

var s = 'aAbBcC';
var expected = 2;
var result = countKeyChanges(s);
console.log(result, result === expected);

var s = 'AaAaAaaA';
var expected = 0;
var result = countKeyChanges(s);
console.log(result, result === expected);
