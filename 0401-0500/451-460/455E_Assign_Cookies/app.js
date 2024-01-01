// 455. Assign Cookies
// https://leetcode.com/problems/assign-cookies/
// T.C.: O(n log n + m log m)
// S.C.: O(log n + log m)
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let result = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let sIndex = 0;
  while (result < g.length && sIndex < s.length) {
    if (g[result] <= s[sIndex]) {
      result++;
    }
    sIndex++;
  }
  return result;
};

var g = [1, 2, 3],
  s = [1, 1];
var expected = 1;
var result = findContentChildren(g, s);
console.log(result, result === expected);

var g = [1, 2],
  s = [1, 2, 3];
var expected = 2;
var result = findContentChildren(g, s);
console.log(result, result === expected);
