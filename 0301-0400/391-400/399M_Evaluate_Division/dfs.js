// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const map = equations.reduce((result, [a, b], index) => {
    const value = values[index];

    let aChildren = result.get(a) ?? [];
    let bChildren = result.get(b) ?? [];

    result.set(a, [...aChildren, [b, value]]);
    result.set(b, [...bChildren, [a, 1 / value]]);

    return result;
  }, new Map());

  function dfs([a, b], visited = new Set(), current = 1) {
    if (!map.has(a) || !map.has(b)) return -1;
    if (visited.has(a)) return;
    if (a === b) return current;

    visited.add(a);
    let children = map.get(a);

    for (const [string, value] of children) {
      if (visited.has(string)) continue;
      let nextValue = current * value;
      let result = dfs([string, b], visited, nextValue);
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
