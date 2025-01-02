// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/
// T.C.: O(n*m)
// S.C.: O(n+m)
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const map = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a).push([b, values[i]]);
    map.get(b).push([a, 1 / values[i]]);
  }

  function dfs([a, b], visited = new Set(), current = 1) {
    if (!map.has(a) || !map.has(b)) return -1;
    if (visited.has(a)) return;
    if (a === b) return current;

    visited.add(a);
    for (const [string, value] of map.get(a)) {
      if (visited.has(string)) continue;
      const nextValue = current * value;
      const result = dfs([string, b], visited, nextValue);
      if (result !== null) return result;
    }

    return null;
  }

  return queries.map(([a, b]) => dfs([a, b]) ?? -1);
};

var equations = [
    ['a', 'b'],
    ['b', 'c'],
  ],
  values = [2.0, 3.0],
  queries = [
    ['a', 'c'],
    ['b', 'a'],
    ['a', 'e'],
    ['a', 'a'],
    ['x', 'x'],
  ];
var expected = [6.0, 0.5, -1.0, 1.0, -1.0];
var result = calcEquation(equations, values, queries);
console.log(result, result.join() === expected.join());

var equations = [
    ['a', 'b'],
    ['b', 'c'],
    ['bc', 'cd'],
  ],
  values = [1.5, 2.5, 5.0],
  queries = [
    ['a', 'c'],
    ['c', 'b'],
    ['bc', 'cd'],
    ['cd', 'bc'],
  ];
var expected = [3.75, 0.4, 5.0, 0.2];
var result = calcEquation(equations, values, queries);
console.log(result, result.join() === expected.join());

var equations = [['a', 'b']],
  values = [0.5],
  queries = [
    ['a', 'b'],
    ['b', 'a'],
    ['a', 'c'],
    ['x', 'y'],
  ];
var expected = [0.5, 2.0, -1.0, -1.0];
var result = calcEquation(equations, values, queries);
console.log(result, result.join() === expected.join());
