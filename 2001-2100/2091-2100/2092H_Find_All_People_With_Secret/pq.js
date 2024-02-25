// 2092. Find All People With Secret
// https://leetcode.com/problems/find-all-people-with-secret/description/
// T.C.: O((n+m)log(n+m) + n*m)
// S.C.: O(n+m)
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  const graph = Array.from({ length: n }, () => []);
  for (const [x, y, t] of meetings) {
    graph[x].push([y, t]);
    graph[y].push([x, t]);
  }

  const earliest = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  earliest[0] = 0;
  earliest[firstPerson] = 0;
  const visited = new Array(n).fill(false);
  const heap = new MinHeap(
    [
      [0, 0],
      [firstPerson, 0],
    ],
    (a, b) => a[1] - b[1]
  );

  while (heap.length) {
    const [person, time] = heap.pop();
    if (visited[person]) continue;

    visited[person] = true;
    for (const [nextPerson, nextTime] of graph[person]) {
      if (!visited[nextPerson] && nextTime >= time) {
        heap.push([nextPerson, nextTime]);
      }
    }
  }

  const result = [];
  for (let i = 0; i < earliest.length; i++) {
    if (visited[i]) {
      result.push(i);
    }
  }
  return result;
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
