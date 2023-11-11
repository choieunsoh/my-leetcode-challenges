// 2642. Design Graph With Shortest Path Calculator
// https://leetcode.com/problems/design-graph-with-shortest-path-calculator/
// T.C.: O(V + E*log V)
// S.C.: O(V + E)
/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
  this.graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    this.graph[u].push([v, w]);
  }
};

/**
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
  const [u, v, w] = edge;
  this.graph[u].push([v, w]);
};

/**
 * @param {number} root
 * @param {number} target
 * @return {number}
 */
Graph.prototype.shortestPath = function (root, target) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const queue = new MinHeap();
  queue.push([root, 0]);
  const distances = new Array(this.graph.length).fill(MAX);
  distances[root] = 0;
  while (queue.length) {
    const [node, distance] = queue.pop();
    if (node === target) return distance;
    if (distance > distances[node]) continue;
    for (const [neighbor, weight] of this.graph[node]) {
      const newDistance = distances[node] + weight;
      if (distances[neighbor] <= newDistance) continue;
      queue.push([neighbor, newDistance]);
      distances[neighbor] = newDistance;
    }
  }
  return distances[target] === MAX ? -1 : distances[target];
};

class MinHeap {
  constructor(data = [], compare = (a, b) => a[1] - b[1]) {
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

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

var ops = ['Graph', 'shortestPath', 'shortestPath', 'addEdge', 'shortestPath'],
  inputs = [
    [
      4,
      [
        [0, 2, 5],
        [0, 1, 2],
        [1, 2, 1],
        [3, 0, 3],
      ],
    ],
    [3, 2],
    [0, 3],
    [[1, 3, 4]],
    [0, 3],
  ],
  outputs = [null, 6, -1, null, 6];
test(ops, inputs, outputs);

var ops = [
    'Graph',
    'addEdge',
    'addEdge',
    'addEdge',
    'addEdge',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'addEdge',
    'addEdge',
    'shortestPath',
    'addEdge',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'shortestPath',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'shortestPath',
    'addEdge',
    'shortestPath',
    'shortestPath',
    'shortestPath',
  ],
  inputs = [
    [
      13,
      [
        [11, 6, 84715],
        [7, 9, 764823],
        [6, 0, 315591],
        [1, 4, 909432],
        [6, 5, 514907],
        [9, 6, 105610],
        [3, 10, 471042],
        [7, 10, 348752],
        [5, 11, 715628],
        [6, 1, 973999],
        [8, 7, 593929],
        [7, 6, 64688],
        [6, 4, 741734],
        [10, 1, 894247],
        [9, 7, 81181],
        [2, 11, 75418],
        [12, 2, 85431],
        [7, 2, 260306],
        [11, 9, 640614],
        [2, 3, 648804],
        [4, 12, 568023],
        [0, 8, 730096],
        [9, 11, 633474],
        [3, 6, 390214],
        [1, 10, 117955],
        [9, 8, 222602],
        [10, 7, 689294],
      ],
    ],
    [[1, 2, 36450]],
    [[8, 0, 709628]],
    [[2, 4, 30185]],
    [[12, 1, 21696]],
    [[1, 8, 2553]],
    [8, 9],
    [1, 11],
    [3, 4],
    [[4, 6, 2182]],
    [[7, 5, 206]],
    [[5, 7, 140]],
    [12, 5],
    [[12, 6, 365184]],
    [[3, 2, 5]],
    [4, 8],
    [7, 10],
    [0, 5],
    [[0, 11, 5]],
    [[1, 7, 5]],
    [0, 8],
    [11, 11],
    [7, 4],
    [0, 12],
    [[3, 9, 858944]],
    [[0, 9, 4]],
    [3, 5],
    [4, 5],
    [12, 9],
    [9, 8],
    [3, 5],
    [[12, 9, 629052]],
    [3, 8],
    [[4, 0, 545201]],
    [11, 8],
    [4, 11],
    [9, 6],
    [[12, 7, 4]],
    [7, 10],
    [2, 5],
    [6, 11],
    [12, 2],
    [9, 7],
    [[4, 3, 879736]],
    [1, 3],
    [1, 0],
    [4, 6],
  ],
  outputs = [
    null,
    null,
    null,
    null,
    null,
    null,
    1358752,
    111868,
    1131948,
    null,
    null,
    null,
    605420,
    null,
    null,
    592272,
    348752,
    1324231,
    null,
    null,
    730096,
    0,
    290491,
    1394477,
    null,
    null,
    429354,
    399164,
    401984,
    222602,
    429354,
    null,
    570569,
    null,
    622912,
    317778,
    105610,
    null,
    348752,
    429349,
    315596,
    58146,
    81181,
    null,
    685254,
    380284,
    2182,
  ];
test(ops, inputs, outputs);

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < inputs.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'shortestPath':
        result = obj.shortestPath(...args);
        break;
      case 'addEdge':
        obj.addEdge(...args);
        break;
      default:
        obj = new Graph(...args);
        break;
    }
    console.log(i, op, expected, result, result === expected);
  }
}
