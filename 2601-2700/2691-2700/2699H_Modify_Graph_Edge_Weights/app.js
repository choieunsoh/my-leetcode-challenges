// 2699. Modify Graph Edge Weights
// https://leetcode.com/problems/modify-graph-edge-weights/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function (n, edges, source, destination, target) {
  const adj = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [u, v, w] of edges) {
    adj[u][v] = w;
    adj[v][u] = w;
  }

  let shortestPath = findPath(adj, source, destination, target);
  if (!shortestPath) {
    return [];
  }
  if (shortestPath[0] === target) {
    return fillGraph(adj);
  }

  while (true) {
    const curr = findFirstModifiableIndex(adj, destination, shortestPath[1]);
    if (!curr) {
      return [];
    }

    const [u, v] = curr;
    adj[u][v] = target - shortestPath[0] + 1;
    adj[v][u] = target - shortestPath[0] + 1;

    shortestPath = findPath(adj, source, destination, target);
    if (!shortestPath) {
      return [];
    }
    if (shortestPath[0] === target) {
      return fillGraph(adj);
    }
    if (shortestPath[0] > target) {
      return [];
    }
  }

  // Modified Dijkstra
  function findPath(adj, source, destination, target) {
    const n = adj.length;
    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const parent = new Array(n).fill(-1);
    dist[source] = 0;
    parent[source] = -1;
    const heap = new MinHeap([], (a, b) => a[1] - b[1]);
    heap.push([source, dist[source]]);
    while (heap.length) {
      const [curr, weight] = heap.pop();
      if (weight > target) {
        return null;
      }

      if (curr === destination) {
        return [weight, parent];
      }

      for (let i = 0; i < n; i++) {
        if (adj[curr][i] !== 0) {
          let newWeight = adj[curr][i];
          if (newWeight === -1) {
            newWeight = 1;
          }
          if (newWeight + weight < dist[i]) {
            dist[i] = newWeight + weight;
            parent[i] = curr;
            heap.push([i, dist[i]]);
          }
        }
      }
    }
    return null;
  }

  function fillGraph(adj) {
    const n = adj.length;
    const list = [];
    for (let u = 0; u < n; u++) {
      for (let v = u + 1; v < n; v++) {
        if (adj[u][v] !== 0) {
          let w = adj[u][v];
          if (w === -1) {
            w = 1;
          }
          list.push([u, v, w]);
        }
      }
    }
    return list;
  }

  function findFirstModifiableIndex(adj, destination, parent) {
    const list = [];
    let curr = destination;
    while (curr !== -1) {
      list.push(curr);
      curr = parent[curr];
    }
    for (let i = list.length - 1; i > 0; i--) {
      const v = list[i];
      const v2 = list[i - 1];
      if (adj[v][v2] === -1) {
        return [v, v2];
      }
    }
    return null;
  }
};

class MinHeap {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop() {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }

    return top;
  }

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

var n = 5,
  edges = [
    [4, 1, -1],
    [2, 0, -1],
    [0, 3, -1],
    [4, 3, -1],
  ],
  source = 0,
  destination = 1,
  target = 5;
var expected = [
  [0, 2, 1],
  [0, 3, 3],
  [1, 4, 1],
  [3, 4, 1],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());

var n = 3,
  edges = [
    [0, 1, -1],
    [0, 2, 5],
  ],
  source = 0,
  destination = 2,
  target = 6;
var expected = [];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());

var n = 4,
  edges = [
    [1, 0, 4],
    [1, 2, 3],
    [2, 3, 5],
    [0, 3, -1],
  ],
  source = 0,
  destination = 2,
  target = 6;
var expected = [
  [0, 1, 4],
  [0, 3, 1],
  [1, 2, 3],
  [2, 3, 5],
];
var result = modifiedGraphEdges(n, edges, source, destination, target);
console.log(result, result.join() === expected.join());
