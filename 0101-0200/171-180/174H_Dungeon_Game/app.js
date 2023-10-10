// 174. Dungeon Game
// https://leetcode.com/problems/dungeon-game/
// T.C.: O(m x n)
// S.C.: O(m x n)
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const rows = dungeon.length;
  const cols = dungeon[0].length;
  const hp = Array.from({ length: rows }, () => new Array(cols).fill(1));

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      const curr = dungeon[row][col];
      let minHP = 1;
      if (row === rows - 1 && col === cols - 1) {
        minHP = 1 - dungeon[row][col];
      } else if (col === cols - 1) {
        minHP = hp[row + 1][col] - curr;
      } else if (row === rows - 1) {
        minHP = hp[row][col + 1] - curr;
      } else {
        const rightward = hp[row][col + 1] - curr;
        const downward = hp[row + 1][col] - curr;
        minHP = Math.min(rightward, downward);
      }
      hp[row][col] = Math.max(1, minHP);
    }
  }

  return hp[0][0];
};

var dungeon = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];
var expected = 7;
var result = calculateMinimumHP(dungeon);
console.log(result, result === expected);

var dungeon = [[0]];
var expected = 1;
var result = calculateMinimumHP(dungeon);
console.log(result, result === expected);
