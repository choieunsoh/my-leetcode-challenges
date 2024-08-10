// 959. Regions Cut By Slashes
// https://leetcode.com/problems/regions-cut-by-slashes/description/
// T.C.: O(n^2 * a(n))
// S.C.: O(n^2)
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const gridSize = grid.length;
  const totalTriangles = gridSize * gridSize * 4;
  const parentArray = new Array(totalTriangles).fill(-1);

  let regionCount = totalTriangles;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // Connect with the cell above
      if (row > 0) {
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row - 1, col, 2),
          getTriangleIndex(gridSize, row, col, 0)
        );
      }
      // Connect with the cell to the left
      if (col > 0) {
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row, col - 1, 1),
          getTriangleIndex(gridSize, row, col, 3)
        );
      }

      // If not '/', connect triangles 0-1 and 2-3
      if (grid[row].charAt(col) !== '/') {
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row, col, 0),
          getTriangleIndex(gridSize, row, col, 1)
        );
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row, col, 2),
          getTriangleIndex(gridSize, row, col, 3)
        );
      }

      // If not '\', connect triangles 0-3 and 1-2
      if (grid[row].charAt(col) !== '\\') {
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row, col, 0),
          getTriangleIndex(gridSize, row, col, 3)
        );
        regionCount -= unionTriangles(
          parentArray,
          getTriangleIndex(gridSize, row, col, 2),
          getTriangleIndex(gridSize, row, col, 1)
        );
      }
    }
  }
  return regionCount;

  // Calculate the index of a triangle in the flattened array
  // Each cell is divided into 4 triangles, numbered 0 to 3 clockwise from the top
  function getTriangleIndex(gridSize, row, col, triangleNum) {
    return (gridSize * row + col) * 4 + triangleNum;
  }

  // Union two triangles and return 1 if they were not already connected, 0 otherwise
  function unionTriangles(parentArray, x, y) {
    const parentX = findParent(parentArray, x);
    const parentY = findParent(parentArray, y);

    if (parentX !== parentY) {
      parentArray[parentX] = parentY;
      return 1; // Regions were merged, so count decreases by 1
    }

    return 0; // Regions were already connected
  }

  // Find the parent (root) of a set
  function findParent(parentArray, x) {
    if (parentArray[x] === -1) return x;

    return (parentArray[x] = findParent(parentArray, parentArray[x]));
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
