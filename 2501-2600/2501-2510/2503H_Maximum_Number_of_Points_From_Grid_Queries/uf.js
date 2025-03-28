// 2503. Maximum Number of Points From Grid Queries
// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/description/
// T.C.: O(k log k + mn log mn)
// S.C.: O(k + mn)
/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
  const ROW_DIRECTIONS = [0, 0, 1, -1];
  const COL_DIRECTIONS = [1, -1, 0, 0];
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const totalCells = rowCount * colCount;

  const sortedQueries = queries.map((value, index) => ({ index, value })).sort((a, b) => a.value - b.value);

  const sortedCells = [];
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      sortedCells.push({ row, col, value: grid[row][col] });
    }
  }
  sortedCells.sort((a, b) => a.value - b.value);

  const uf = new UnionFind(totalCells);
  const result = new Array(queries.length);
  let cellIndex = 0;

  for (const query of sortedQueries) {
    while (cellIndex < totalCells && sortedCells[cellIndex].value < query.value) {
      const { row, col } = sortedCells[cellIndex];
      const cellId = row * colCount + col;

      for (let direction = 0; direction < 4; direction++) {
        const newRow = row + ROW_DIRECTIONS[direction];
        const newCol = col + COL_DIRECTIONS[direction];

        if (
          newRow >= 0 &&
          newRow < rowCount &&
          newCol >= 0 &&
          newCol < colCount &&
          grid[newRow][newCol] < query.value
        ) {
          uf.union(cellId, newRow * colCount + newCol);
        }
      }
      cellIndex++;
    }
    result[query.index] = query.value > grid[0][0] ? uf.getSize(0) : 0;
  }
  return result;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(-1);
    this.size = new Array(n).fill(1);
  }

  find(node) {
    if (this.parent[node] < 0) return node;
    return (this.parent[node] = this.find(this.parent[node]));
  }

  union(nodeA, nodeB) {
    const rootA = this.find(nodeA);
    const rootB = this.find(nodeB);
    if (rootA === rootB) return false;

    if (this.size[rootA] > this.size[rootB]) {
      this.parent[rootB] = rootA;
      this.size[rootA] += this.size[rootB];
    } else {
      this.parent[rootA] = rootB;
      this.size[rootB] += this.size[rootA];
    }
    return true;
  }

  getSize(node) {
    return this.size[this.find(node)];
  }
}

var grid = [
    [1, 2, 3],
    [2, 5, 7],
    [3, 5, 1],
  ],
  queries = [5, 6, 2];
var expected = [5, 8, 1];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());

var grid = [
    [5, 2, 1],
    [1, 1, 2],
  ],
  queries = [3];
var expected = [0];
var result = maxPoints(grid, queries);
console.log(result, result.join() === expected.join());
