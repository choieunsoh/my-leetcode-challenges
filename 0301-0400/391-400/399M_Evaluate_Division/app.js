// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/
// T.C.: O((n+m) log n)
// S.C.: O(n)
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const uf = new UnionFind();
  for (let i = 0; i < equations.length; i++) {
    const [dividend, divisor] = equations[i];
    const value = values[i];
    uf.union(dividend, divisor, value);
  }

  const result = [];
  for (const [dividend, divisor] of queries) {
    const dividendFound = uf.map.has(dividend);
    const divisorFound = uf.map.has(divisor);
    if (!dividendFound || !divisorFound) {
      result.push(-1);
      continue;
    }

    const [dividendKey, dividendWeight] = uf.find(dividend);
    const [divisorKey, divisorWeight] = uf.find(divisor);
    if (dividendKey !== divisorKey) {
      result.push(-1);
      continue;
    }

    result.push(dividendWeight / divisorWeight);
  }

  return result;
};

class UnionFind {
  constructor() {
    this.map = new Map();
  }

  find(key) {
    if (!this.map.has(key)) {
      this.map.set(key, [key, 1]);
    }
    const [prevKey, prevWeight] = this.map.get(key);
    if (prevKey !== key) {
      const [newKey, newWeight] = this.find(prevKey);
      this.map.set(key, [newKey, prevWeight * newWeight]);
    }
    return this.map.get(key);
  }

  union(dividend, divisor, value) {
    const [dividendKey, dividendWeight] = this.find(dividend);
    const [divisorKey, divisorWeight] = this.find(divisor);
    if (dividendKey !== divisorKey) {
      this.map.set(dividendKey, [divisorKey, (divisorWeight * value) / dividendWeight]);
    }
  }
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
