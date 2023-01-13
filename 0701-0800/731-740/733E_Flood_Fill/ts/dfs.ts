// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/
var floodFill = function (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) return image;
  const findColor = image[sr][sc];

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  image[sr][sc] = color;
  for (const [dr, dc] of dir) {
    if (image[sr + dr]?.[sc + dc] === findColor) {
      floodFill(image, sr + dr, sc + dc, color);
    }
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
