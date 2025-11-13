// 3607. Power Grid Maintenance
// https://leetcode.com/problems/power-grid-maintenance/description/
// T.C.: O((m+c+q)*a)
// S.C.: O(c)
/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = function (c, connections, queries) {
  const dsu = new DSU(c + 1);

  connections.forEach(([u, v]) => {
    dsu.join(u, v);
  });

  const online = Array.from({ length: c + 1 }).fill(true);
  const offlineCounts = Array.from({ length: c + 1 }).fill(0);
  const minimumOnlineStations = new Map();

  for (const [op, x] of queries) {
    if (op === 2) {
      online[x] = false;
      offlineCounts[x] += 1;
    }
  }

  for (let i = 1; i <= c; i++) {
    const root = dsu.find(i);
    if (!minimumOnlineStations.has(root)) {
      minimumOnlineStations.set(root, -1);
    }

    const station = minimumOnlineStations.get(root);
    if (online[i] === true) {
      if (station === -1 || station > i) {
        minimumOnlineStations.set(root, i);
      }
    }
  }

  const ans = [];

  for (const [op, x] of queries.reverse()) {
    const root = dsu.find(x);
    const station = minimumOnlineStations.get(root);

    if (op === 1) {
      if (online[x]) {
        ans.push(x);
      } else {
        ans.push(station);
      }
    }

    if (op === 2) {
      if (offlineCounts[x] > 1) {
        offlineCounts[x] -= 1;
      } else {
        online[x] = true;
        if (station === -1 || station > x) {
          minimumOnlineStations.set(root, x);
        }
      }
    }
  }

  return ans.reverse();
};

class DSU {
  constructor(size) {
    this.size = size;
    this.parent = Array.from({ length: size }).map((_, i) => i);
  }

  join(u, v) {
    this.parent[this.find(v)] = this.find(u);
  }

  find(x) {
    return this.parent[x] === x ? x : (this.parent[x] = this.find(this.parent[x]));
  }
}

var c = 5,
  connections = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
  queries = [
    [1, 3],
    [2, 1],
    [1, 1],
    [2, 2],
    [1, 2],
  ];
var expected = [3, 2, 3];
var result = processQueries(c, connections, queries);
console.log(result, result.join() === expected.join());

var c = 3,
  connections = [],
  queries = [
    [1, 1],
    [2, 1],
    [1, 1],
  ];
var expected = [1, -1];
var result = processQueries(c, connections, queries);
console.log(result, result.join() === expected.join());
