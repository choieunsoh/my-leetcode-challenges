// 2675. Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/
/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const matrix = new Array(arr.length + 1).fill(null).map(() => []);
  const rows = new Array(arr.length).fill(null).map(() => new Map());
  const uniqueColumns = new Set();
  for (let row = 0; row < arr.length; row += 1) {
    for (const [key, value] of getNestedColumn(arr[row])) {
      rows[row].set(key, value);
      uniqueColumns.add(key);
    }
  }

  const columns = [...uniqueColumns].sort();
  matrix[0] = columns;
  for (let row = 0; row < arr.length; row += 1) {
    for (const col of columns) {
      if (rows[row].has(col)) {
        matrix[row + 1].push(rows[row].get(col));
      } else {
        matrix[row + 1].push('');
      }
    }
  }

  return matrix;

  function* getNestedColumn(obj, prefixes = []) {
    if (obj != null && Array.isArray(obj)) {
      for (let key = 0; key < obj.length; key += 1) {
        prefixes.push(key);
        yield* getNestedColumn(obj[key], prefixes);
        prefixes.pop();
      }
    } else if (obj !== null && typeof obj === 'object') {
      for (const key of Object.keys(obj)) {
        prefixes.push(key);
        yield* getNestedColumn(obj[key], prefixes);
        prefixes.pop();
      }
    } else if (prefixes.length > 0) {
      yield [prefixes.join('.'), obj];
    }
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
