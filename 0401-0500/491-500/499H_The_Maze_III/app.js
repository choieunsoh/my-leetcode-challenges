// 499. The Maze III
// https://leetcode.com/problems/the-maze-iii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function (maze, ball, hole) {
  const rows = maze.length;
  const cols = maze[0].length;
  const dir = [0, -1, 0, 1, 0];
  const dirStr = ['l', 'u', 'r', 'd'];
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const heap = new MinHeap([], (a, b) => (a[2] === b[2] ? (a[3] < b[3] ? -1 : 1) : a[2] - b[2]));
  heap.push([...ball, 0, '']);

  while (heap.length) {
    const [row, col, dist, path] = heap.pop();
    if (seen[row][col]) continue;

    if (row === hole[0] && col === hole[1]) return path;

    seen[row][col] = true;

    const neighbors = getNeighbors(row, col);
    for (const [newRow, newCol, steps, dir] of neighbors) {
      heap.push([newRow, newCol, dist + steps, path + dir]);
    }
  }

  return 'impossible';

  function canMove(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols && maze[row][col] === 0;
  }

  function getNeighbors(row, col) {
    const neighbors = [];
    for (let i = 0; i < 4; i++) {
      let [nr, nc] = [row, col];
      let count = 0;
      while (canMove(nr + dir[i], nc + dir[i + 1])) {
        nr += dir[i];
        nc += dir[i + 1];
        count++;

        if (nr === hole[0] && nc === hole[1]) {
          break;
        }
      }
      neighbors.push([nr, nc, count, dirStr[i]]);
    }
    return neighbors;
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

var maze = [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ],
  ball = [4, 3],
  hole = [0, 1];
var expected = 'lul';
var result = findShortestWay(maze, ball, hole);
console.log(result, result === expected);

var maze = [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ],
  ball = [4, 3],
  hole = [3, 0];
var expected = 'impossible';
var result = findShortestWay(maze, ball, hole);
console.log(result, result === expected);

var maze = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
  ],
  ball = [0, 4],
  hole = [3, 5];
var expected = 'dldr';
var result = findShortestWay(maze, ball, hole);
console.log(result, result === expected);
