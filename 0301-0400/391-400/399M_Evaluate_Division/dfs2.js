// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    let [u, v] = equations[i];
    if (!graph[u]) graph[u] = {};
    graph[u][v] = values[i];

    if (!graph[v]) graph[v] = {};
    graph[v][u] = 1 / values[i];
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [dividend, divisor] = queries[i];
    if (!graph[dividend] || !graph[divisor]) {
      result.push(-1);
    } else {
      result.push(findQueryOut(graph, dividend, divisor));
    }
  }
  return result;
};

function findQueryOut(graph, s, d, visited = {}) {
  if (visited[s]) return -1;

  visited[s] = true;
  for (let key in graph[s]) {
    if (key === d) {
      return graph[s][key];
    }

    const prod = findQueryOut(graph, key, d, visited);
    if (prod !== -1) {
      return graph[s][key] * prod;
    }
  }
  return -1;
}

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
