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
  const M = image.length;
  const N = image[0].length;

  let visited = Array(M)
    .fill(0)
    .map((_) => Array(N).fill(false));
  let queue = [];

  const color = image[sr][sc];
  image[sr][sc] = newColor;
  visited[sr][sc] = true;
  queue.push([sr, sc]);

  const addLast = (r, c) => {
    if (visited[r][c] === false && image[r][c] === color) {
      image[r][c] = newColor;
      visited[r][c] = true;
      queue.push([r, c]);
    }
  };

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    // Up
    if (r - 1 >= 0) {
      addLast(r - 1, c);
    }
    // Down
    if (r + 1 < M) {
      addLast(r + 1, c);
    }
    // Left
    if (c - 1 >= 0) {
      addLast(r, c - 1);
    }
    // Right
    if (c + 1 < N) {
      addLast(r, c + 1);
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
