// 3189. Minimum Moves to Get a Peaceful Board
// https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} rooks
 * @return {number}
 */
var minMoves = function (rooks) {
  let moves = 0;
  const n = rooks.length;

  rooks.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i++) {
    moves += Math.abs(i - rooks[i][0]);
  }

  rooks.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < n; i++) {
    moves += Math.abs(i - rooks[i][1]);
  }

  return moves;
};

var rooks = [
  [0, 0],
  [1, 0],
  [1, 1],
];
var expected = 3;
var result = minMoves(rooks);
console.log(result, result === expected);

var rooks = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
];
var expected = 6;
var result = minMoves(rooks);
console.log(result, result === expected);
