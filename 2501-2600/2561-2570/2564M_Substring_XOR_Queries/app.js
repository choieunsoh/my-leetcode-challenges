// 2564. Substring XOR Queries
// https://leetcode.com/problems/substring-xor-queries/
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
  const map = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === '0') {
      if (!map.has(0)) {
        map.set(0, [i, i]);
      }
      continue;
    }

    for (let j = i; j <= Math.min(i + 32, n - 1); j++) {
      const num = parseInt(s.slice(i, j + 1), 2);
      if (!map.has(num)) {
        map.set(num, [i, j]);
      }
    }
  }

  const result = [];
  for (const [first, second] of queries) {
    const value = first ^ second;
    result.push(map.get(value) ?? [-1, -1]);
  }
  return result;
};

var s = '101101',
  queries = [
    [0, 5],
    [1, 2],
  ];
var expected = [
  [0, 2],
  [2, 3],
];
var result = substringXorQueries(s, queries);
console.log(result, result.join() === expected.join());

var s = '0101',
  queries = [[12, 8]];
var expected = [[-1, -1]];
var result = substringXorQueries(s, queries);
console.log(result, result.join() === expected.join());

var s = '1',
  queries = [[4, 5]];
var expected = [[0, 0]];
var result = substringXorQueries(s, queries);
console.log(result, result.join() === expected.join());

var s = '010111010101000000001011001111111101010101010011011001010001110101111010000100101011011',
  queries = [
    [3, 3338],
    [2, 72],
    [6, 40],
    [6, 1474476],
    [4, 2399],
    [10, 5982],
    [2, 531277512],
    [7, 6],
    [8, 174891943],
    [1, 14],
    [4, 6],
    [6, 5461],
    [0, 1],
    [5, 67934],
    [1, 346],
    [4, 4],
    [8, 17],
    [10, 81],
    [4, 11795793],
  ];
var expected = [
  [67, 78],
  [50, 56],
  [1, 6],
  [20, 40],
  [75, 86],
  [1, 13],
  [28, 56],
  [1, 1],
  [41, 68],
  [26, 29],
  [1, 2],
  [35, 47],
  [1, 1],
  [70, 86],
  [78, 86],
  [0, 0],
  [22, 26],
  [80, 86],
  [20, 43],
];
var result = substringXorQueries(s, queries);
console.log(result, result.join() === expected.join());
