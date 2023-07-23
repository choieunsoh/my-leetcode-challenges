/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  let result = 0;
  let rows = n;
  let cols = n;
  const seenRow = new Set();
  const seenCol = new Set();
  for (let i = queries.length - 1; i >= 0; i--) {
    const [type, index, value] = queries[i];
    if (type === 0) {
      // row
      if (seenRow.has(index)) continue;
      seenRow.add(index);
      result += value * rows;
      cols--;
    } else {
      // col
      if (seenCol.has(index)) continue;
      seenCol.add(index);
      result += value * cols;
      rows--;
    }
  }
  return result;
};

var n = 3,
  queries = [
    [0, 0, 1],
    [1, 2, 2],
    [0, 2, 3],
    [1, 0, 4],
  ];
var expected = 23;
var result = matrixSumQueries(n, queries);
console.log(result, result === expected);

var n = 3,
  queries = [
    [0, 0, 4],
    [0, 1, 2],
    [1, 0, 1],
    [0, 2, 3],
    [1, 2, 1],
  ];
var expected = 17;
var result = matrixSumQueries(n, queries);
console.log(result, result === expected);

var n = 8,
  queries = [
    [0, 6, 30094],
    [0, 7, 99382],
    [1, 2, 18599],
    [1, 3, 49292],
    [1, 0, 81549],
    [1, 1, 38280],
    [0, 0, 19405],
    [0, 4, 30065],
    [1, 4, 60826],
    [1, 5, 9241],
    [0, 5, 33729],
    [0, 1, 41456],
    [0, 2, 62692],
    [0, 3, 30807],
    [1, 7, 70613],
    [1, 6, 9506],
    [0, 5, 39344],
    [1, 0, 44658],
    [1, 1, 56485],
    [1, 2, 48112],
    [0, 6, 43384],
  ];
var expected = 2783119;
var result = matrixSumQueries(n, queries);
console.log(result, result === expected);
