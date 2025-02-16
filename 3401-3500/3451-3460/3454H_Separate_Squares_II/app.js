// 3454. Separate Squares II
// https://leetcode.com/problems/separate-squares-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
class Event {
  constructor(y, x1, x2, type) {
    this.y = y;
    this.x1 = x1;
    this.x2 = x2;
    this.type = type;
  }
}

class Segment {
  constructor(cover, start, end) {
    this.cover = cover;
    this.start = start;
    this.end = end;
  }
}

/**
 * @param {number[][]} squares
 * @return {number}
 */
function separateSquares(squares) {
  const events = [];
  const set = new Set();
  for (let [x, y, l] of squares) {
    events.push(new Event(y, x, x + l, 1));
    events.push(new Event(y + l, x, x + l, -1));
    set.add(x);
    set.add(x + l);
  }

  const size = set.size;
  const sorted = [...set].sort((a, b) => a - b);
  const map = new Map(sorted.map((val, idx) => [val, idx]));

  events.sort((a, b) => a.y - b.y);
  const count = new Array(size * 4).fill(0);
  const length = new Array(size * 4).fill(0);

  build(1, 0, size - 2);

  const segments = [];
  let prevY = events[0].y;
  let covered = 0;

  for (const event of events) {
    const currY = event.y;
    if (currY > prevY) {
      if (covered > 0) {
        segments.push(new Segment(covered, prevY, currY));
      }
      prevY = currY;
    }

    const left = map.get(event.x1);
    const right = map.get(event.x2) - 1;
    if (left <= right) {
      update(1, 0, size - 2, left, right, event.type);
    }
    covered = length[1];
  }

  const totalArea = segments.reduce((sum, s) => sum + s.cover * (s.end - s.start), 0);
  const halfArea = totalArea / 2;

  let currArea = 0;
  for (const segment of segments) {
    const area = segment.cover * (segment.end - segment.start);
    if (currArea + area >= halfArea) {
      const need = halfArea - currArea;
      return round(segment.start + need / segment.cover);
    }
    currArea += area;
  }

  return round(segments[segments.length - 1].end);

  function round(num, precision = 5) {
    const factor = 10 ** precision;
    return Math.round(num * factor) / factor;
  }

  function build(idx, left, right) {
    count[idx] = 0;
    length[idx] = 0;

    if (left === right) return;

    const mid = (left + right) >>> 1;
    build(idx << 1, left, mid);
    build((idx << 1) | 1, mid + 1, right);
  }

  function update(idx, left, right, ql, qr, val) {
    if (ql > right || qr < left) return;

    if (ql <= left && right <= qr) {
      count[idx] += val;
    } else {
      const mid = (left + right) >>> 1;
      update(idx << 1, left, mid, ql, qr, val);
      update((idx << 1) | 1, mid + 1, right, ql, qr, val);
    }
    if (count[idx] > 0) {
      length[idx] = sorted[right + 1] - sorted[left];
    } else {
      length[idx] = left === right ? 0 : length[idx << 1] + length[(idx << 1) | 1];
    }
  }
}

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
