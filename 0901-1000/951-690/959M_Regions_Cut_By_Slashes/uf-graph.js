// 959. Regions Cut By Slashes
// https://leetcode.com/problems/regions-cut-by-slashes/description/
// T.C.: O(a(n^2))
// S.C.: O(n^2)
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const gridSize = grid.length;
  const pointsPerSide = gridSize + 1;
  const totalPoints = pointsPerSide * pointsPerSide;

  // Initialize disjoint set data structure
  const parentArray = new Array(totalPoints).fill(-1);

  // Connect border points
  for (let i = 0; i < pointsPerSide; i++) {
    for (let j = 0; j < pointsPerSide; j++) {
      if (i === 0 || j === 0 || i === pointsPerSide - 1 || j === pointsPerSide - 1) {
        const point = i * pointsPerSide + j;
        parentArray[point] = 0;
      }
    }
  }

  // Set the parent of the top-left corner to itself
  parentArray[0] = -1;
  let regionCount = 1; // Start with one region (the border)

  // Process each cell in the grid
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Treat each slash as an edge connecting two points
      if (grid[i].charAt(j) === '/') {
        const topRight = i * pointsPerSide + (j + 1);
        const bottomLeft = (i + 1) * pointsPerSide + j;
        regionCount += union(parentArray, topRight, bottomLeft);
      } else if (grid[i].charAt(j) === '\\') {
        const topLeft = i * pointsPerSide + j;
        const bottomRight = (i + 1) * pointsPerSide + (j + 1);
        regionCount += union(parentArray, topLeft, bottomRight);
      }
    }
  }

  return regionCount;

  // Find the parent of a set
  function find(parentArray, node) {
    if (parentArray[node] === -1) return node;

    return (parentArray[node] = find(parentArray, parentArray[node]));
  }

  // Union two sets and return 1 if a new region is formed, 0 otherwise
  function union(parentArray, node1, node2) {
    const parent1 = find(parentArray, node1);
    const parent2 = find(parentArray, node2);

    if (parent1 === parent2) {
      return 1; // Nodes are already in the same set, new region formed
    }

    parentArray[parent2] = parent1; // Union the sets
    return 0; // No new region formed
  }
};

var grid = [' /', '/ '];
var expected = 2;
var result = regionsBySlashes(grid);
console.log(result, result === expected);

var grid = [' /', '  '];
var expected = 1;
var result = regionsBySlashes(grid);
console.log(result, result === expected);

var grid = ['/\\', '\\/'];
var expected = 5;
var result = regionsBySlashes(grid);
console.log(result, result === expected);
