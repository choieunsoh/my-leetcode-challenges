// 2675. Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/
/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const matrix = [];
  const columns = new Set();

  arr = arr.map((ele) => flattenBacktracking(ele, '', {}, columns));
  matrix.push([...columns].sort());

  const columnsIdx = matrix[0].reduce((acc, cur, idx) => ((acc[cur] = idx), acc), {});

  arr.forEach((ele) => {
    matrix.push(Array(columns.size).fill(''));
    Object.entries(ele).forEach(([key, value]) => (matrix.at(-1)[columnsIdx[key]] = value));
  });

  return matrix;

  function flattenBacktracking(ele, path, object, columns) {
    if (ele !== null && typeof ele === 'object') {
      Object.entries(ele).forEach(([key, value]) =>
        flattenBacktracking(value, path + (path ? '.' : '') + key, object, columns)
      );
    } else {
      object[path] = ele;
      columns.add(path);
    }
    return object;
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
