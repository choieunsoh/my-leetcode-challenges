// 759. Employee Free Time
// https://leetcode.com/problems/employee-free-time/description/
// T.C.: O(C log N)
// S.C.: O(N)
/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const result = [];
  const heap = new MinHeap((a, b) => {
    const aStart = schedule[a.employeeId][a.index].start ?? schedule[a.employeeId][a.index][0];
    const bStart = schedule[b.employeeId][b.index].start ?? schedule[b.employeeId][b.index][0];
    return aStart - bStart;
  });

  let anchor = Infinity;
  for (let employeeId = 0; employeeId < schedule.length; employeeId++) {
    heap.push({ employeeId, index: 0 });
    anchor = Math.min(anchor, schedule[employeeId][0].start ?? schedule[employeeId][0][0]);
  }

  while (!heap.isEmpty()) {
    const job = heap.pop();
    const interval = schedule[job.employeeId][job.index];
    const start = interval.start ?? interval[0];
    const end = interval.end ?? interval[1];

    if (anchor < start) {
      result.push(typeof Interval === 'function' ? new Interval(anchor, start) : [anchor, start]);
    }

    anchor = Math.max(anchor, end);
    job.index += 1;
    if (job.index < schedule[job.employeeId].length) {
      heap.push(job);
    }
  }

  return result;
};

class MinHeap {
  constructor(compare) {
    this.compare = compare;
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    this.#bubbleUp(this.data.length - 1);
  }

  pop() {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.#bubbleDown(0);
    }
    return top;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  #bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parent]) >= 0) break;
      [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
      index = parent;
    }
  }

  #bubbleDown(index) {
    const { data } = this;
    while (true) {
      const left = index * 2 + 1;
      const right = left + 1;
      let smallest = index;

      if (left < data.length && this.compare(data[left], data[smallest]) < 0) {
        smallest = left;
      }
      if (right < data.length && this.compare(data[right], data[smallest]) < 0) {
        smallest = right;
      }
      if (smallest === index) break;

      [data[index], data[smallest]] = [data[smallest], data[index]];
      index = smallest;
    }
  }
}

var schedule = [
  [
    [1, 2],
    [5, 6],
  ],
  [[1, 3]],
  [[4, 10]],
];
var expected = [[3, 4]];
var result = employeeFreeTime(schedule);
console.log(result, result.join() === expected.join());

var schedule = [
  [
    [1, 3],
    [6, 7],
  ],
  [[2, 4]],
  [
    [2, 5],
    [9, 12],
  ],
];
var expected = [
  [5, 6],
  [7, 9],
];
var result = employeeFreeTime(schedule);
console.log(result, result.join() === expected.join());
