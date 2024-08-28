// 1905. Count Sub Islands
// https://leetcode.com/problems/count-sub-islands/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const rows = grid1.length;
  const cols = grid1[0].length;
  const directions = [0, 1, 0, -1, 0];
  const uf = new UnionFind(rows * cols);

  // Traverse each land cell of 'grid2'.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!isLand(grid2, row, col)) continue;

      for (let k = 0; k < 4; k++) {
        const [nextRow, nextCol] = [row + directions[k], col + directions[k + 1]];
        if (!isValidCell(grid2, nextRow, nextCol)) continue;

        // Union adjacent land cells with the current land cell.
        const index = toIndex(row, col);
        const nextIndex = toIndex(nextRow, nextCol);
        uf.union(index, nextIndex);
      }
    }
  }

  // Traverse 'grid2' land cells and mark that cell's root as not a sub-island
  // if the land cell is not present at the respective position in 'grid1'.
  const subIslands = new Array(rows * cols).fill(true);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (isLand(grid2, row, col) && !isLand(grid1, row, col)) {
        const index = toIndex(row, col);
        const root = uf.find(index);
        subIslands[root] = false;
      }
    }
  }

  // Count all the sub-islands.
  let subIslandCount = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!isLand(grid2, row, col)) continue;

      const index = toIndex(row, col);
      const root = uf.find(index);
      if (!subIslands[root]) continue;

      // One cell can be the root of multiple land cells, so to
      // avoid counting the same island multiple times, mark it as false.
      subIslands[root] = false;
      subIslandCount++;
    }
  }

  return subIslandCount;

  function toIndex(row, col) {
    return row * cols + col;
  }

  function isLand(grid, i, j) {
    return grid[i][j] === 1;
  }

  function isSubIsland(i, j) {
    let isSubIsland = true;
    let queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length) {
      const nextQueue = [];
      for (const [row, col] of queue) {
        if (!isLand(grid1, row, col)) {
          isSubIsland = false;
        }

        for (let k = 0; k < 4; k++) {
          const [nextRow, nextCol] = [row + directions[k], col + directions[k + 1]];
          if (!isValidCell(grid2, nextRow, nextCol)) continue;

          nextQueue.push([nextRow, nextCol]);
          visited[nextRow][nextCol] = true;
        }
      }
      queue = nextQueue;
    }
    return isSubIsland;
  }

  function isValidCell(grid, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || !isLand(grid, row, col)) return false;
    return true;
  }
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}

var grid1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ],
  grid2 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ];
var expected = 3;
var result = countSubIslands(grid1, grid2);
console.log(result, result === expected);

var grid1 = [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
  ],
  grid2 = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ];
var expected = 2;
var result = countSubIslands(grid1, grid2);
console.log(result, result === expected);
