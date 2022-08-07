// https://leetcode.com/problems/flipping-an-image/
// 832. Flipping an Image
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const cols = image[0].length;
  const half = cols / 2;
  for (let row = 0; row < image.length; row++) {
    for (let left = 0; left < half; left++) {
      const right = cols - 1 - left;
      [image[row][left], image[row][right]] = [
        image[row][right],
        image[row][left],
      ];
    }
    for (let col = 0; col < cols; col++) {
      image[row][col] ^= 1;
    }
  }
  return image;
};

var image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
var expected = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
var actual = flipAndInvertImage(image);
console.log(actual.join() == expected.join());

var image = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];
var expected = [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 1, 0],
];
var actual = flipAndInvertImage(image);
console.log(actual.join() == expected.join());
