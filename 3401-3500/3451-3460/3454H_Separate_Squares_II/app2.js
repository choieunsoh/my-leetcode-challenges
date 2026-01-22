// 3454. Separate Squares II
// https://leetcode.com/problems/separate-squares-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
class SegmentTree {
  constructor(xs) {
    this.xs = xs; // sorted x coordinates
    this.n = xs.length - 1;
    this.count = new Array(4 * this.n).fill(0);
    this.covered = new Array(4 * this.n).fill(0);
  }

  update(qleft, qright, qval, left, right, pos) {
    if (this.xs[right + 1] <= qleft || this.xs[left] >= qright) {
      return; // no overlap
    }
    if (qleft <= this.xs[left] && this.xs[right + 1] <= qright) {
      this.count[pos] += qval;
    } else {
      const mid = Math.floor((left + right) / 2);
      this.update(qleft, qright, qval, left, mid, pos * 2 + 1);
      this.update(qleft, qright, qval, mid + 1, right, pos * 2 + 2);
    }

    if (this.count[pos] > 0) {
      this.covered[pos] = this.xs[right + 1] - this.xs[left];
    } else {
      if (left === right) {
        this.covered[pos] = 0;
      } else {
        this.covered[pos] = this.covered[pos * 2 + 1] + this.covered[pos * 2 + 2];
      }
    }
  }

  query() {
    return this.covered[0];
  }
}

/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
  // save events: [y-coordinate, type, left boundary, right boundary]
  const events = [];
  const xsSet = new Set();

  for (const sq of squares) {
    const [x, y, l] = sq;
    const xr = x + l;
    events.push([y, 1, x, xr]);
    events.push([y + l, -1, x, xr]);
    xsSet.add(x);
    xsSet.add(xr);
  }

  // sort events by y-coordinate
  events.sort((a, b) => a[0] - b[0]);
  // discrete coordinates
  const xs = Array.from(xsSet).sort((a, b) => a - b);
  // initialize the segment tree
  const segTree = new SegmentTree(xs);

  const pSum = [];
  const widths = [];
  let totalArea = 0;
  let prev = events[0][0];

  // scan: calculate total area and record intermediate states
  for (const event of events) {
    const [y, delta, xl, xr] = event;
    const length = segTree.query();
    totalArea += length * (y - prev);
    segTree.update(xl, xr, delta, 0, segTree.n - 1, 0);
    // record prefix sums and widths
    pSum.push(totalArea);
    widths.push(segTree.query());
    prev = y;
  }

  // calculate the target area (half rounded up)
  const target = Math.floor((totalArea + 1) / 2);
  // find the first position greater than or equal to target using binary search
  let left = 0;
  let right = pSum.length - 1;
  let i = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (pSum[mid] < target) {
      i = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // get the corresponding area, width, and height
  const area = pSum[i];
  const width = widths[i];
  const height = events[i][0];

  const result = height + (totalArea - area * 2) / (width * 2.0);
  return Number(result.toFixed(5));
};

var squares = [
  [0, 0, 1],
  [2, 2, 1],
];
var expected = 1.0;
var result = separateSquares(squares);
console.log(result, result === expected);

var squares = [
  [0, 0, 2],
  [1, 1, 1],
];
var expected = 1.0;
var result = separateSquares(squares);
console.log(result, result === expected);

var squares = [
  [15, 21, 2],
  [19, 21, 3],
];
var expected = 22.3;
var result = separateSquares(squares);
console.log(result, result === expected);

var squares = [
  [26, 29, 3],
  [10, 24, 1],
];
var expected = 30.33333;
var result = separateSquares(squares);
console.log(result, result === expected);
