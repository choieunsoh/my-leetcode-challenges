// 2923. Find Champion I
// https://leetcode.com/problems/find-champion-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  const teams = grid.length;
  for (let teamA = 0; teamA < teams; teamA++) {
    let teamAWins = 0;
    for (let team = 0; team < teams; team++) {
      if (teamA === team) continue;
      if (grid[teamA][team] === 1) teamAWins++;
    }
    if (teamAWins === teams - 1) {
      return teamA;
    }
  }
  return 0;
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
