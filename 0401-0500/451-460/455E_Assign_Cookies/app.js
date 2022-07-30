// https://leetcode.com/problems/assign-cookies/
// 455. Assign Cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let result = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gIndex = 0;
  let sIndex = 0;
  while (gIndex < g.length && sIndex < s.length) {
    if (g[gIndex] <= s[sIndex]) {
      result++;
      gIndex++;
      sIndex++;
    } else {
      sIndex++;
    }
  }
  return result;
};

var g = [1, 2, 3],
  s = [1, 1];
var expected = 1;
console.log(findContentChildren(g, s), expected);

var g = [1, 2],
  s = [1, 2, 3];
var expected = 2;
console.log(findContentChildren(g, s), expected);
