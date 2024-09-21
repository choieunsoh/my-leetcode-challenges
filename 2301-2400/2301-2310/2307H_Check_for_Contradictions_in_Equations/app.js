// 2307. Check for Contradictions in Equations
// https://leetcode.com/problems/check-for-contradictions-in-equations/description/
// T.C.: O(V+E)
// S.C.: O(E)
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @return {boolean}
 */
var checkContradictions = function (equations, values) {
  const graph = new Map();
  const visited = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    if (!graph.has(a)) graph.set(a, []);
    graph.get(a).push([b, values[i]]);

    if (!graph.has(b)) graph.set(b, []);
    graph.get(b).push([a, 1 / values[i]]);
  }

  for (const [key] of graph) {
    if (!visited.has(key) && causesContradiction(key, 1)) {
      return true;
    }
  }

  return false;

  function causesContradiction(key, value) {
    if (!visited.has(key)) {
      visited.set(key, value);

      for (const [newKey, div] of graph.get(key)) {
        if (causesContradiction(newKey, value / div)) {
          return true;
        }
      }
    }
    return Math.abs(visited.get(key) - value) >= 1e-5;
  }
};

var equations = [
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'c'],
  ],
  values = [3, 0.5, 1.5];
var expected = false;
var result = checkContradictions(equations, values);
console.log(result, result === expected);

var equations = [
    ['le', 'et'],
    ['le', 'code'],
    ['code', 'et'],
  ],
  values = [2, 5, 0.5];
var expected = true;
var result = checkContradictions(equations, values);
console.log(result, result === expected);

var equations = [
    ['oxlp', 'rxekw'],
    ['wusp', 'py'],
    ['jiljl', 'ocki'],
    ['wna', 'ahd'],
    ['btzo', 'oxlp'],
    ['tf', 'gdzjl'],
    ['btzo', 'xfzuo'],
    ['jiljl', 'gdzjl'],
    ['hpic', 'wusp'],
    ['z', 'qs'],
    ['tkgna', 'wna'],
    ['wusp', 'btzo'],
    ['ocki', 'z'],
    ['ttfkc', 'py'],
    ['xfzuo', 'xfzuo'],
    ['ahd', 'xfzuo'],
    ['ocki', 'py'],
    ['jnsz', 'py'],
    ['wna', 'wna'],
    ['wusp', 'wusp'],
    ['ttfkc', 'py'],
    ['qs', 'dci'],
    ['wusp', 'wusp'],
    ['btzo', 'oxlp'],
    ['tf', 'tf'],
    ['ocki', 'ocki'],
    ['z', 'qs'],
    ['qs', 'dci'],
    ['z', 'qs'],
    ['btzo', 'btzo'],
  ],
  values = [
    8.32, 9.23, 2.96, 8.64, 8.66, 1.55, 1.5, 4.12, 7.2, 9.26, 5.62, 8.07, 9.75, 2.03, 1, 1.08, 3.96, 8.41, 1, 1, 1.35,
    6.59, 1, 7.47, 1, 1, 9.26, 6.59, 9.26, 1,
  ];
var expected = true;
var result = checkContradictions(equations, values);
console.log(result, result === expected);
