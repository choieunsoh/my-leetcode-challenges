// 1168. Optimize Water Distribution in a Village
// https://leetcode.com/problems/optimize-water-distribution-in-a-village
// T.C.: O((N+M) * log⁡(N+M))
// S.C.: O(N+M)
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  // n + 1 vertices (n houses and 1 well)
  // Add edges coming from the well to pipes array
  for (let i = 0; i < wells.length; i++) {
    let house = i + 1;
    let wellId = 0;
    let weight = wells[i];
    pipes.push([wellId, house, weight]);
  }

  // sort pipes array according to weight
  pipes.sort((a, b) => a[2] - b[2]);

  // We need to connect n edges so that they form a
  // minimum spanning tree, we take help of a Union Find
  // data structure here. All the edges from pipes array
  // are added there

  let unionFind = new UnionFind(pipes.length);

  // count is the number of vertices added to the MST
  let count = 0;

  // total cost (minimum weight of the MST)
  let totalCost = 0;
  for (let i = 0; i < pipes.length; i++) {
    let v1 = pipes[i][0];
    let v1Group = unionFind.find(v1);
    let v2 = pipes[i][1];
    let v2Group = unionFind.find(v2);

    // We add an edge to the spanning tree if both the vertices
    // are not from the same group (thereby not forming a cycle)
    if (v1Group !== v2Group) {
      count += 1;
      totalCost += pipes[i][2];
      unionFind.union(v1Group, v2Group);
      if (count === n) {
        break;
      }
    }
  }

  return totalCost;
};

// Standard implementation of Union Find data structure
class UnionFind {
  constructor(length) {
    this.parent = Array.from({ length: length }, (_, i) => i);
    this.rank = new Array(length).fill(1);
  }

  find(item) {
    if (this.parent[item] === item) {
      return item;
    }

    this.parent[item] = this.find(this.parent[item]);
    return this.parent[item];
  }

  union(x, y) {
    let parentX = this.find(x);
    let parentY = this.find(y);

    if (parentX === parentY) {
      return parentX;
    }

    if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
      return parentY;
    } else if (this.rank[parentY] < this.rank[parentX]) {
      this.parent[parentY] = parentX;
      return parentX;
    } else {
      this.parent[parentY] = parentX;
      this.rank[parentX] += 1;
      return parentX;
    }
  }
}

var n = 3,
  wells = [1, 2, 2],
  pipes = [
    [1, 2, 1],
    [2, 3, 1],
  ];
var expected = 3;
var result = minCostToSupplyWater(n, wells, pipes);
console.log(result, result === expected);

var n = 2,
  wells = [1, 1],
  pipes = [
    [1, 2, 1],
    [1, 2, 2],
  ];
var expected = 2;
var result = minCostToSupplyWater(n, wells, pipes);
console.log(result, result === expected);
