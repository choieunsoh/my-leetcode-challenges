// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;

  const rows = image.length;
  const cols = image[0].length;
  const color = image[sr][sc];
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== color) return;

    image[r][c] = newColor;
    for (let i = 0; i < dr.length; i++) {
      dfs(r + dr[i], c + dc[i]);
    }
    return image;
  }

  return dfs(sr, sc);
};

var image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;
var expected = [
  [2, 2, 2],
  [2, 2, 0],
  [2, 0, 1],
];
var result = floodFill(image, sr, sc, color);
console.log(result.join('\n'), result.join('') === expected.join(''));

var image = [
    [0, 0, 0],
    [0, 0, 0],
  ],
  sr = 0,
  sc = 0,
  color = 0;
var expected = [
  [0, 0, 0],
  [0, 0, 0],
];
var result = floodFill(image, sr, sc, color);
console.log(result.join('\n'), result.join('') === expected.join(''));
