// 2675. Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/
/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  const map = getSub(arr);
  const set = new Set();

  for (const key of map.keys()) {
    const i = key.indexOf('.');
    const symbol = key.slice(i + 1);
    set.add(symbol);
  }

  const keys = [...set].sort((a, b) => (a < b ? -1 : 1));
  const len = arr.length;
  const matrix = [keys];

  for (let i = 1; i <= len; i++) {
    if (keys.length === 0) {
      matrix[i] = [];
      continue;
    }

    for (let j = 0; j < keys.length; j++) {
      const key = `${i - 1}.${keys[j]}`;
      if (!matrix[i]) {
        matrix[i] = [];
      }
      matrix[i][j] = map.has(key) ? map.get(key) : '';
    }
  }

  return matrix;

  function isObject(elem) {
    return elem instanceof Object;
  }

  function getSub(obj) {
    const map = new Map();

    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        setMap(obj[i], `${i}`);
      }
    } else {
      for (const key of Object.keys(obj)) {
        setMap(obj[key], key);
      }
    }

    return map;

    function setMap(elem, preKey) {
      if (!isObject(elem)) {
        map.set(preKey, elem);
        return;
      }

      const subMap = getSub(elem);
      for (const entry of subMap.entries()) {
        const symbol = `${preKey}.${entry[0]}`;
        map.set(symbol, entry[1]);
      }
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
