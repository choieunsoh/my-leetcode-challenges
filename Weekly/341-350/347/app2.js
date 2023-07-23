/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let r = row - 1;
      let c = col - 1;
      const set1 = new Set();
      while (grid[r]?.[c]) {
        set1.add(grid[r--][c--]);
      }
      r = row + 1;
      c = col + 1;
      const set2 = new Set();
      while (grid[r]?.[c]) {
        set2.add(grid[r++][c++]);
      }
      if (set1.size === 0 || set2.size === 0) {
        result[row][col] = Math.abs(set1.size - set2.size);
      } else {
        result[row][col] = getDiff(set1, set2);
      }
    }
  }

  return result;
  function getDiff(setA, setB) {
    const a = new Set([...setA].filter((element) => !setB.has(element))).size;
    const b = new Set([...setB].filter((element) => !setA.has(element))).size;
    return Math.abs(a - b);
  }
};
var grid = [
  [1, 2, 3],
  [3, 1, 5],
  [3, 2, 1],
];
var expected = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];
var result = differenceOfDistinctValues(grid);
console.log(result, result.join() === expected.join());
result.map((row) => console.log(row));

var grid = [
  [5, 50, 39, 37],
  [2, 19, 36, 26],
  [27, 3, 23, 10],
  [20, 33, 8, 39],
];
var expected = [
  [3, 2, 1, 0],
  [2, 1, 0, 1],
  [1, 0, 1, 2],
  [0, 1, 2, 3],
];
var result = differenceOfDistinctValues(grid);
console.log(result, result.join() === expected.join());
result.map((row) => console.log(row));
