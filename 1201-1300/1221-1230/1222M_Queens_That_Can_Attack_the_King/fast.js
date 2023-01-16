// 1222. Queens That Can Attack the King
// https://leetcode.com/problems/queens-that-can-attack-the-king/description/
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  let result = [];
  const set = new Set();
  for (const [x, y] of queens) {
    set.add(`${x}-${y}`);
  }
  let [x, y] = king;
  while (x >= 0) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x--;
  }
  [x, y] = king;
  while (x < 8) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x++;
  }
  [x, y] = king;
  while (y >= 0) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    y--;
  }
  [x, y] = king;
  while (y < 8) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    y++;
  }
  [x, y] = king;
  while (x >= 0 && y >= 0) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x--;
    y--;
  }
  [x, y] = king;
  while (x < 8 && y < 8) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x++;
    y++;
  }
  [x, y] = king;
  while (x >= 0 && y < 8) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x--;
    y++;
  }
  [x, y] = king;
  while (x < 8 && y >= 0) {
    const key = `${x}-${y}`;
    if (set.has(key)) {
      result.push([x, y]);
      break;
    }
    x++;
    y--;
  }

  return result;
};

function sort(arr) {
  arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  return arr;
}
var queens = [
    [0, 1],
    [1, 0],
    [4, 0],
    [0, 4],
    [3, 3],
    [2, 4],
  ],
  king = [0, 0];
var expected = [
  [0, 1],
  [1, 0],
  [3, 3],
];
var result = queensAttacktheKing(queens, king);
console.log(result, sort(result).join() == sort(expected).join());

var queens = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 5],
  ],
  king = [3, 3];
var expected = [
  [2, 2],
  [3, 4],
  [4, 4],
];
var result = queensAttacktheKing(queens, king);
console.log(result, sort(result).join() == sort(expected).join());
