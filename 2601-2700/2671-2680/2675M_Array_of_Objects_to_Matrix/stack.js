// 2675. Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/
/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const colMap = new Map();
  const matrix = [[]];

  for (let i = 0; i < arr.length; i++) {
    const stack = [[arr[i], []]];
    matrix.push(Array(colMap.size).fill(''));

    while (stack.length > 0) {
      const [front, path] = stack.pop();

      if (typeof front === 'object' && front !== null) {
        const keys = Object.keys(front);

        for (let j = keys.length - 1; j >= 0; j--) {
          stack.push([front[keys[j]], path.concat(keys[j])]);
        }
      } else if (Array.isArray(front)) {
        for (let j = front.length - 1; j >= 0; j--) {
          stack.push([front[j], path.concat(j)]);
        }
      } else {
        let pathStr = path.join('.');

        if (!colMap.has(pathStr)) {
          matrix[0].push(pathStr);
          colMap.set(pathStr, matrix[0].length - 1);

          for (let j = 1; j < matrix.length; j++) {
            matrix[j][matrix[0].length - 1] = '';
          }
        }

        let j = colMap.get(pathStr);
        matrix[i + 1][j] = front;
      }
    }
  }

  return sortCols(matrix);

  function sortCols(matrix) {
    // Copy the column names from the first row of the matrix and sort them using localeCompare
    const sortedColNames = matrix[0].slice().sort((a, b) => a.localeCompare(b));

    // Create a new sorted matrix based on the sorted column names
    const sortedMatrix = matrix.map((row) => {
      const sortedRow = [];
      for (let i = 0; i < sortedColNames.length; i++) {
        const colIndex = matrix[0].indexOf(sortedColNames[i]);
        sortedRow.push(row[colIndex]);
      }
      return sortedRow;
    });

    return sortedMatrix;
  }
};

var arr = [
  { b: 1, a: 2 },
  { b: 3, a: 4 },
];
var expected = [
  ['a', 'b'],
  [2, 1],
  [4, 3],
];
var result = jsonToMatrix(arr);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
var expected = [
  ['a', 'b', 'c', 'd'],
  [1, 2, '', ''],
  ['', '', 3, 4],
  ['', '', '', ''],
];
var result = jsonToMatrix(arr);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
var expected = [
  ['a.b', 'a.c', 'a.d'],
  [1, 2, ''],
  [3, '', 4],
];
var result = jsonToMatrix(arr);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [[{ a: null }], [{ b: true }], [{ c: 'x' }]];
var expected = [
  ['0.a', '0.b', '0.c'],
  [null, '', ''],
  ['', true, ''],
  ['', '', 'x'],
];
var result = jsonToMatrix(arr);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var arr = [{}, {}, {}];
var expected = [[], [], [], []];
var result = jsonToMatrix(arr);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
