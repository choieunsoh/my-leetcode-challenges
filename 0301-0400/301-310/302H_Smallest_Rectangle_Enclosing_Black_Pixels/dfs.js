// 302. Smallest Rectangle Enclosing Black Pixels
// https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  if (image.length === 0 || image[0].length === 0) return 0;

  let top = x;
  let bottom = x;
  let left = y;
  let right = y;

  dfs(x, y);
  return (right - left) * (bottom - top);

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= image.length || j >= image[0].length || image[i][j] === '0') {
      return;
    }

    image[i][j] = '0';

    top = Math.min(top, i);
    bottom = Math.max(bottom, i + 1);
    left = Math.min(left, j);
    right = Math.max(right, j + 1);

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};

var image = [
    ['0', '0', '1', '0'],
    ['0', '1', '1', '0'],
    ['0', '1', '0', '0'],
  ],
  x = 0, // row
  y = 2; // col
var expected = 6;
var result = minArea(image, x, y);
console.log(result, result === expected);

var image = [['1']],
  x = 0,
  y = 0;
var expected = 1;
var result = minArea(image, x, y);
console.log(result, result === expected);
