// https://leetcode.com/problems/flood-fill/
// 733. Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let curColor = image[sr][sc];
  image[sr][sc] = newColor;

  if (
    sr > 0 &&
    image[sr - 1][sc] === curColor &&
    image[sr - 1][sc] !== newColor
  ) {
    image = floodFill(image, sr - 1, sc, newColor);
  }

  if (
    sr < image.length - 1 &&
    image[sr + 1][sc] === curColor &&
    image[sr + 1][sc] !== newColor
  ) {
    image = floodFill(image, sr + 1, sc, newColor);
  }

  if (
    sc > 0 &&
    image[sr][sc - 1] === curColor &&
    image[sr][sc - 1] !== newColor
  ) {
    image = floodFill(image, sr, sc - 1, newColor);
  }

  if (
    sc < image[0].length - 1 &&
    image[sr][sc + 1] === curColor &&
    image[sr][sc + 1] !== newColor
  ) {
    image = floodFill(image, sr, sc + 1, newColor);
  }

  return image;
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
console.log(result.join(' '), result.join('') === expected.join(''));

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
console.log(result.join(' '), result.join('') === expected.join(''));
