// 827. Making A Large Island
// https://leetcode.com/problems/making-a-large-island/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [0, 1, 0, -1, 0];
  const uf = new UnionFind(rows * cols);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        const node = row * cols + col;
        for (let d = 0; d < 4; d++) {
          const neighborRow = row + dirs[d];
          const neighborCol = col + dirs[d + 1];
          if (!isValid(neighborRow, neighborCol)) continue;

          const neighbor = neighborRow * cols + neighborCol;
          uf.union(node, neighbor);
        }
      }
    }
  }

  let maxIslandSize = 0;
  let hasZero = false;
  const uniqueRoots = new Set();
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        hasZero = true;

        // Start with the flipped `0`
        let currentIslandSize = 1;

        for (let d = 0; d < 4; d++) {
          const neighborRow = row + dirs[d];
          const neighborCol = col + dirs[d + 1];

          // Check bounds and ensure the neighbor is `1`
          if (isValid(neighborRow, neighborCol)) {
            const neighborNode = neighborRow * cols + neighborCol;
            const root = uf.find(neighborNode);
            uniqueRoots.add(root);
          }
        }

        // Sum up the sizes of unique neighboring islands
        for (const root of uniqueRoots) {
          currentIslandSize += uf.size(root);
        }

        // Clear the set for the next `0`
        uniqueRoots.clear();

        // Update the result with the largest island size found
        maxIslandSize = Math.max(maxIslandSize, currentIslandSize);
      }
    }
  }

  // If there are no zeros, the largest island is the entire grid
  if (!hasZero) return rows * cols;

  return maxIslandSize;

  function isValid(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === 1;
  }
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
  }

  size(x) {
    return this.rank[x];
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
    if (rootX === rootY) return false;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
      this.rank[rootY] = 0;
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
      this.rank[rootX] = 0;
    }

    this.groups--;
    return true;
  }
}

var grid = [
  [1, 0],
  [0, 1],
];
var expected = 3;
var result = largestIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1],
  [1, 0],
];
var expected = 4;
var result = largestIsland(grid);
console.log(result, result === expected);

var grid = [
  [1, 1],
  [1, 1],
];
var expected = 4;
var result = largestIsland(grid);
console.log(result, result === expected);
