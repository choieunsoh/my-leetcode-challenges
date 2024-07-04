// T.C.: O(n^3*m)
// S.C.: O(n+m)
/**
 * @param {string} newName
 * @param {string} oldName
 * @return {number}
 */
function numberOfWays(roads) {
  const n = roads.length + 1;
  const g = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of roads) {
    g[u].push(v);
    g[v].push(u);
  }

  let ways = 0;
  for (let a = 1; a <= n - 2; a++) {
    for (let b = a + 1; b <= n - 1; b++) {
      for (let c = b + 1; c <= n; c++) {
        if (isEquidistance(a, b, c)) {
          ways++;
        }
      }
    }
  }

  return ways;

  function distance(source, dest) {
    const visited = new Array(n).fill(false);
    let q = [source];
    let distance = 0;
    while (q.length) {
      const qq = [];
      for (const city of q) {
        if (visited[city]) continue;
        visited[city] = true;
        if (city === dest) return distance;
        for (const neighbor of g[city]) {
          if (visited[neighbor]) continue;
          qq.push(neighbor);
        }
      }
      q = qq;
      distance++;
    }
    return -1;
  }

  function isEquidistance(a, b, c) {
    const distanceAB = distance(a, b);
    const distanceBC = distance(b, c);
    if (distanceAB !== distanceBC) return false;
    const distanceCA = distance(c, a);
    return distanceBC === distanceCA;
  }
}

var roads = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
var expected = 4;
var result = numberOfWays(roads);
console.log(result, result === expected);

var roads = [
  [1, 2],
  [1, 5],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
var expected = 2;
var result = numberOfWays(roads);
console.log(result, result === expected);

var roads = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
var expected = 0;
var result = numberOfWays(roads);
console.log(result, result === expected);
