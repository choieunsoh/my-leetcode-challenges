// 3607. Power Grid Maintenance
// https://leetcode.com/problems/power-grid-maintenance/description/
// T.C.: O(m + c log c + q)
// S.C.: O(m + c)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */
var processQueries = function (c, connections, queries) {
  const graph = Array.from({ length: c + 1 }, () => []);
  const vertices = Array.from({ length: c + 1 });

  for (let i = 0; i < c; i++) {
    vertices[i + 1] = {
      offline: false,
      powerGridId: -1,
      vertexId: i + 1,
    };
  }

  connections.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  const powerGrids = new Array();

  for (let i = 1, powerGridId = 0; i <= c; i++) {
    if (vertices[i].powerGridId === -1) {
      const powerGrid = new MinPriorityQueue();

      const traverse = (u) => {
        u.powerGridId = powerGridId;

        powerGrid.enqueue(u.vertexId);

        for (const v of graph[u.vertexId].map((i) => vertices[i])) {
          if (v.powerGridId === -1) {
            traverse(v);
          }
        }
      };

      traverse(vertices[i]);
      powerGrids.push(powerGrid);
      powerGridId += 1;
    }
  }

  const ans = [];

  for (const [op, x] of queries) {
    if (op === 1) {
      if (vertices[x].offline === false) {
        ans.push(x);
      } else {
        const powerGrid = powerGrids[vertices[x].powerGridId];
        while (powerGrid.front() !== null && vertices[powerGrid.front()].offline === true) {
          powerGrid.dequeue();
        }

        ans.push(powerGrid.front() !== null ? powerGrid.front() : -1);
      }
    } else if (op === 2) {
      vertices[x].offline = true;
    }
  }

  return ans;
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
