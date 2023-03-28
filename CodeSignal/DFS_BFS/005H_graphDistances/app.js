// graphDistances
/**
 * @param {number[][]} g
 * @param {number} s
 * @return {number}
 */
function solution(g, s) {
  const n = g.length;
  const dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
  const q = new Set(Array.from({ length: n }, (_, i) => i));

  dist[s] = 0;
  while (q.size) {
    let min = -1;
    for (const i of q) {
      if (min === -1 || dist[i] < dist[min]) {
        min = i;
      }
    }
    q.delete(min);

    for (let next = 0; next < n; next++) {
      const weight = g[min][next];
      if (weight === -1) continue;
      const otherDist = dist[min] + weight;
      if (otherDist < dist[next]) {
        dist[next] = otherDist;
      }
    }
  }
  return dist;
}

var g = [
    [-1, 3, 2],
    [2, -1, 0],
    [-1, 0, -1],
  ],
  s = 0;
var expected = [0, 2, 2];
var result = solution(g, s);
console.log(result, result.join() === expected.join());
