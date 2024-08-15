// 3189. Minimum Moves to Get a Peaceful Board
// https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} rooks
 * @return {number}
 */
var minMoves = function (rooks) {
  const n = rooks.length;
  const rows = new Array(n).fill(0);
  const cols = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rows[rooks[i][0]]++;
    cols[rooks[i][1]]++;
  }

  let moves = 0;
  let rowMinMoves = 0;
  let colMinMoves = 0;
  for (let i = 0; i < n; i++) {
    rowMinMoves += rows[i] - 1;
    colMinMoves += cols[i] - 1;
    moves += Math.abs(rowMinMoves) + Math.abs(colMinMoves);
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
