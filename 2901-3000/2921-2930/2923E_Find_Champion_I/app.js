// 2923. Find Champion I
// https://leetcode.com/problems/find-champion-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  let winner = 0;
  const teams = grid.length;
  for (let opponent = 0; opponent < teams; opponent++) {
    if (opponent === winner) continue;
    if (grid[winner][opponent] === 0) {
      winner = opponent;
    }
  }
  return winner;
};

var grid = [
  [0, 1],
  [0, 0],
];
var expected = 0;
var result = findChampion(grid);
console.log(result, result === expected);

var grid = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 0, 0],
];
var expected = 1;
var result = findChampion(grid);
console.log(result, result === expected);
