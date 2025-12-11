// 3531. Count Covered Buildings
// https://leetcode.com/problems/count-covered-buildings/description/
// T.C.: O(n*m^2*log(m))
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  const xMap = new Map();
  const yMap = new Map();
  for (const [x, y] of buildings) {
    if (!xMap.has(x)) xMap.set(x, []);
    xMap.get(x).push(y);
    if (!yMap.has(y)) yMap.set(y, []);
    yMap.get(y).push(x);
  }

  for (const indices of xMap.values()) {
    if (indices.length > 2) {
      indices.sort((a, b) => a - b);
    }
  }
  for (const indices of yMap.values()) {
    if (indices.length > 2) {
      indices.sort((a, b) => a - b);
    }
  }

  let count = 0;
  for (const [x, yIndices] of xMap) {
    for (let i = 1; i < yIndices.length - 1; i++) {
      const y = yIndices[i];
      const xIndices = yMap.get(y);
      for (let j = 1; j < xIndices.length - 1; j++) {
        if (xIndices[j] === x) {
          count++;
        }
      }
    }
  }

  return count;
};

var n = 3,
  buildings = [
    [1, 2],
    [3, 2],
    [2, 2],
    [2, 1],
    [2, 3],
  ];
var expected = 1;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);

var n = 3,
  buildings = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ];
var expected = 0;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);

var n = 5,
  buildings = [
    [1, 3],
    [3, 2],
    [3, 3],
    [3, 5],
    [5, 3],
  ];
var expected = 1;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);
