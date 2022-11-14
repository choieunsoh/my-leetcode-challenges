// 630. Course Schedule III
// https://leetcode.com/problems/course-schedule-iii/
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);

  let total = 0;
  const pq = new PriorityQueue();
  for (let i = 0; i < courses.length; i++) {
    const [duration, end] = courses[i];
    if (duration > end) continue;

    if (total + duration <= end) {
      total += duration;
      pq.enqueue(duration);
    } else if (duration < pq.peek() && pq.size()) {
      total += duration - pq.dequeue();
      pq.enqueue(duration);
    }
  }

  return pq.size();
};

class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    const length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (value <= this.arr[i]) {
        this.arr.splice(i, 0, value);
        return;
      }
    }
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  size() {
    return this.arr.length;
  }
}

var courses = [
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200],
];
var expected = 3;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [[1, 2]];
var expected = 1;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [3, 2],
  [4, 3],
];
var expected = 0;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [5, 5],
  [4, 6],
  [2, 6],
];
var expected = 2;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [5, 15],
  [3, 19],
  [6, 7],
  [2, 10],
  [5, 16],
  [8, 14],
  [10, 11],
  [2, 19],
];
var expected = 5;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [7, 17],
  [3, 12],
  [10, 20],
  [9, 10],
  [5, 20],
  [10, 19],
  [4, 18],
];
var expected = 4;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);
