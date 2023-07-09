// 2768. Number of Black Blocks
// https://leetcode.com/problems/number-of-black-blocks
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function (m, n, coordinates) {
  const counter = new Map();
  for (const [x, y] of coordinates) {
    for (let dx = 0; dx <= 1; dx++) {
      for (let dy = 0; dy <= 1; dy++) {
        if (x - dx < 0 || y - dy < 0 || x - dx >= m - 1 || y - dy >= n - 1) continue;
        const key = n * (x - dx) + y - dy;
        const count = counter.get(key) ?? 0;
        counter.set(key, count + 1);
      }
    }
  }

  const result = new Array(5).fill(0);
  for (const [, count] of counter) {
    result[count]++;
  }

  const sum = result.reduce((sum, count) => sum + count, 0);
  result[0] = (m - 1) * (n - 1) - sum;

  return result;
};

var m = 3,
  n = 3,
  coordinates = [[0, 0]];
var expected = [3, 1, 0, 0, 0];
var result = countBlackBlocks(m, n, coordinates);
console.log(result, result.join() === expected.join());

var m = 3,
  n = 3,
  coordinates = [
    [0, 0],
    [1, 1],
    [0, 2],
  ];
var expected = [0, 2, 2, 0, 0];
var result = countBlackBlocks(m, n, coordinates);
console.log(result, result.join() === expected.join());
