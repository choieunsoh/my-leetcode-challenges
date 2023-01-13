// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/
var floodFill = function (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const M = image.length;
  const N = image[0].length;
  const visited = Array(M)
    .fill(0)
    .map(() => Array(N).fill(false));
  const targetColor = image[sr][sc];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[sr, sc]];
  image[sr][sc] = color;
  visited[sr][sc] = true;

  while (queue.length) {
    const [r, c] = queue.shift()!;
    for (const [dr, dc] of dir) {
      const row = r + dr;
      const col = c + dc;
      if (validCell(row, col)) {
        image[row][col] = color;
        queue.push([row, col]);
        visited[row][col] = true;
      }
    }
  }

  function validCell(row: number, col: number) {
    return (
      row >= 0 &&
      row < M &&
      col >= 0 &&
      col < N &&
      !visited[row][col] &&
      image[row][col] === targetColor
    );
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
