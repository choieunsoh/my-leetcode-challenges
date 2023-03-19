// 947. Most Stones Removed with Same Row or Column
// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
class DisjoinSet {
  constructor() {
    this.parents = new Map();
    this.rank = new Map();
    this.size = 0;
  }

  add(el) {
    this.parents.set(el, el);
    this.rank.set(el, 0);
    this.size += 1;
  }

  union(a, b) {
    let aParent = this.find(a);
    let bParent = this.find(b);
    if (aParent === undefined) {
      this.add(a);
      aParent = a;
    }
    if (bParent === undefined) {
      this.add(b);
      bParent = b;
    }

    if (aParent === bParent) {
      // same set, nothing to do
      return;
    }

    if (this.rank.get(aParent) > this.rank.get(bParent)) {
      this.parents.set(bParent, aParent);
    } else if (this.rank.get(bParent) > this.rank.get(aParent)) {
      this.parents.set(aParent, bParent);
    } else {
      this.parents.set(bParent, aParent);
      this.rank.set(aParent, this.rank.get(aParent) + 1);
    }
    this.size -= 1;
  }

  find(el) {
    let curr = el;
    while (curr !== this.parents.get(curr)) {
      curr = this.parents.get(curr);
    }
    if (curr === undefined) {
      return;
    }

    const parent = curr;
    curr = el;
    while (curr !== parent) {
      const next = this.parents.get(curr);
      this.parents.set(curr, parent);
      curr = next;
    }

    return parent;
  }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const ds = new DisjoinSet();
  for (let i = 0; i < stones.length; i++) {
    const row = -(stones[i][0] + 1);
    const col = stones[i][1] + 1;
    ds.union(row, col);
  }
  return stones.length - ds.size;
};

var stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
var expected = 5;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [
  [0, 0],
  [0, 2],
  [1, 1],
  [2, 0],
  [2, 2],
];
var expected = 3;
var result = removeStones(stones);
console.log(result, result === expected);

var stones = [[0, 0]];
var expected = 0;
var result = removeStones(stones);
console.log(result, result === expected);
