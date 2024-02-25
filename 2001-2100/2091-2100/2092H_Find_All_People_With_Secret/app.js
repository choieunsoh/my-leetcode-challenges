// 2092. Find All People With Secret
// https://leetcode.com/problems/find-all-people-with-secret/description/
// T.C.: O(n + m log m)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);
  uf.union(0, firstPerson);

  let i = 0;
  while (i < meetings.length) {
    const people = [];
    const time = meetings[i][2];
    while (i < meetings.length && meetings[i][2] === time) {
      const [x, y] = meetings[i++];
      uf.union(x, y);
      people.push(x);
      people.push(y);
    }
    for (const person of people) {
      if (!uf.connected(0, person)) uf.reset(person);
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (uf.connected(0, i)) {
      result.push(i);
    }
  }
  return result;
};

class UnionFind {
  constructor(size) {
    this.root = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.root[x] === x) return x;
    this.root[x] = this.find(this.root[x]);
    return this.root[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.root[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.root[rootX] = rootY;
      } else {
        this.root[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }

  connected(x, y) {
    // Check if two nodes x and y are connected or not
    return this.find(x) === this.find(y);
  }

  reset(x) {
    // Reset the initial properties of node x
    this.root[x] = x;
    this.rank[x] = 0;
  }
}

var n = 6,
  meetings = [
    [1, 2, 5],
    [2, 3, 8],
    [1, 5, 10],
  ],
  firstPerson = 1;
var expected = [0, 1, 2, 3, 5];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4,
  meetings = [
    [3, 1, 3],
    [1, 2, 2],
    [0, 3, 3],
  ],
  firstPerson = 3;
var expected = [0, 1, 3];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());

var n = 5,
  meetings = [
    [3, 4, 2],
    [1, 2, 1],
    [2, 3, 1],
  ],
  firstPerson = 1;
var expected = [0, 1, 2, 3, 4];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());
