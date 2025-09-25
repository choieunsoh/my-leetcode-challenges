// 3571. Find the Shortest Superstring II
// https://leetcode.com/problems/find-the-shortest-superstring-ii/description/
// T.C.: O(n*m)
// S.C.: O(n+m)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var shortestSuperstring = function (s1, s2) {
  if (s2.includes(s1)) return s2;
  if (s1.includes(s2)) return s1;
  const n1 = s1.length;
  const n2 = s2.length;
  const min = Math.min(n1, n2);
  for (let i = min; i > 0; i--) {
    if (s1.substring(n1 - i) === s2.substring(0, i)) return s1 + s2.substring(i);
    if (s2.substring(n2 - i) === s1.substring(0, i)) return s2 + s1.substring(i);
  }
  return s1 + s2;
};

var s1 = 'aba',
  s2 = 'bab';
var expected = 'abab';
var result = shortestSuperstring(s1, s2);
console.log(result, result === expected);

var s1 = 'aa',
  s2 = 'aaa';
var expected = 'aaa';
var result = shortestSuperstring(s1, s2);
console.log(result, result === expected);

var s1 = 'z',
  s2 = 'zr';
var expected = 'zr';
var result = shortestSuperstring(s1, s2);
console.log(result, result === expected);
