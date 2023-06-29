// 864. Shortest Path to Get All Keys
// https://leetcode.com/problems/shortest-path-to-get-all-keys/
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [1, 0, -1, 0, 1];
  const a = 'a'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);

  const keySet = new Set();
  const lockSet = new Set();
  let startRow = 0;
  let startCol = 0;
  let allKeys = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      if (cell === '@') {
        startRow = row;
        startCol = col;
      } else if (cell >= 'a' && cell <= 'f') {
        allKeys += 1 << (cell.charCodeAt(0) - a);
        keySet.add(cell);
      } else if (cell >= 'A' && cell <= 'F') {
        lockSet.add(cell);
      }
    }
  }

  const seen = new Map([[0, new Set([`${startRow},${startCol}`])]]);
  // [row, column, key state, distance]
  let queue = [[startRow, startCol, 0, 0]];
  while (queue.length) {
    const nextQueue = [];
    for (const [row, col, keys, dist] of queue) {
      for (let d = 0; d < 4; d++) {
        const nextRow = row + dirs[d];
        const nextCol = col + dirs[d + 1];

        // If next cell (nextRow, nextCol) can not reachable
        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols || grid[nextRow][nextCol] === '#') {
          continue;
        }

        // If it is a key:
        const cell = grid[nextRow][nextCol];
        const nextPair = `${nextRow},${nextCol}`;
        if (keySet.has(cell)) {
          // If we have collected it before, no need to revisit this cell.
          const checkKeys = (1 << (cell.charCodeAt(0) - a)) & keys;
          if (checkKeys !== 0) continue;

          // Otherwise, we can walk to this cell and pick it up.
          const nextKeys = (1 << (cell.charCodeAt(0) - a)) | keys;

          // If we collect all keys, return dist + 1.
          if (nextKeys === allKeys) {
            return dist + 1;
          }

          // Otherwise, just add this state to seen and queue.
          if (!seen.has(nextKeys)) {
            seen.set(nextKeys, new Set());
          }
          seen.get(nextKeys).add(nextPair);
          nextQueue.push([nextRow, nextCol, nextKeys, dist + 1]);
        }

        // If it is a lock and we don't have its key, continue.
        const nextLocks = (1 << (cell.charCodeAt(0) - A)) & keys;
        if (lockSet.has(cell) && nextLocks === 0) {
          continue;
        }

        // We can walk to this cell if we haven't been here before with the same key state.
        if (!seen.has(keys) || seen.get(keys).has(nextPair)) continue;

        seen.get(keys).add(nextPair);
        nextQueue.push([nextRow, nextCol, keys, dist + 1]);
      }
    }
    queue = nextQueue;
  }

  return -1;
};

var grid = ['@.a..', '###.#', 'b.A.B'];
var expected = 8;
var result = shortestPathAllKeys(grid);
console.log(result, result === expected);

var grid = ['@..aA', '..B#.', '....b'];
var expected = 6;
var result = shortestPathAllKeys(grid);
console.log(result, result === expected);

var grid = ['@Aa'];
var expected = -1;
var result = shortestPathAllKeys(grid);
console.log(result, result === expected);
