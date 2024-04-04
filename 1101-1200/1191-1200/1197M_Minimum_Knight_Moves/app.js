// 1197. Minimum Knight Moves
// https://leetcode.com/problems/minimum-knight-moves/description/
// T.C.: O(|x*y|)
// T.C.: O(|x*y|)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  const memo = new Map();
  return dfs(Math.abs(x), Math.abs(y));

  function dfs(x, y) {
    const key = `${x},${y}`;
    if (memo.has(key)) return memo.get(key);
    if (x + y === 0) return 0;
    if (x + y === 2) return 2;

    const move1 = dfs(Math.abs(x - 1), Math.abs(y - 2));
    const move2 = dfs(Math.abs(x - 2), Math.abs(y - 1));
    const moves = Math.min(move1, move2) + 1;
    memo.set(key, moves);
    return moves;
  }
};

var x = 2,
  y = 1;
var expected = 1;
var result = minKnightMoves(x, y);
console.log(result, result === expected);

var x = 1,
  y = 1;
var expected = 2;
var result = minKnightMoves(x, y);
console.log(result, result === expected);

var x = 5,
  y = 5;
var expected = 4;
var result = minKnightMoves(x, y);
console.log(result, result === expected);

var x = 209,
  y = -58;
var expected = 105;
var result = minKnightMoves(x, y);
console.log(result, result === expected);
