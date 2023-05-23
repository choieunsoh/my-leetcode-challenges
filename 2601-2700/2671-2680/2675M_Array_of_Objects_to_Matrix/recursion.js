// 2675. Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/
/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const keysSet = arr.reduce((acc, curr) => {
    getKeys(curr).forEach((k) => acc.add(k));
    return acc;
  }, new Set());

  const keys = Array.from(keysSet).sort();

  const matrix = [keys];
  arr.forEach((obj) => {
    matrix.push(keys.map((key) => getValue(obj, key)));
  });

  return matrix;

  function isObject(x) {
    return x !== null && typeof x === 'object';
  }

  function getKeys(object) {
    if (!isObject(object)) return [''];
    const result = [];
    for (const key of Object.keys(object)) {
      const childKeys = getKeys(object[key]);
      for (const childKey of childKeys) {
        result.push(childKey ? `${key}.${childKey}` : key);
      }
    }
    return result;
  }

  function getValue(obj, path) {
    const paths = path.split('.');
    let i = 0;
    let value = obj;
    while (i < paths.length) {
      if (!isObject(value)) break;
      value = value[paths[i++]];
    }
    if (i < paths.length || isObject(value) || value === undefined) return '';
    return value;
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
