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
    set.add(10 * x + y);
  }
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  for (const [x, y] of dir) {
    move(x, y);
  }

  function move(i, j) {
    let x = king[0];
    let y = king[1];
    while (true) {
      x += i;
      y += j;

      if (x < 0 || x > 7 || y < 0 || y > 7) break;
      if (set.has(10 * x + y)) {
        result.push([x, y]);
        break;
      }
    }
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
