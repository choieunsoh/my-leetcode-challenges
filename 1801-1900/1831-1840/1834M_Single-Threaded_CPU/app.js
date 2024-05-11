// 1834. Single-Threaded CPU
// https://leetcode.com/problems/single-threaded-cpu/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue, PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  const result = [];
  const n = tasks.length;
  for (let i = 0; i < n; i++) {
    tasks[i].push(i);
  }
  tasks.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let i = 0;
  let currentTime = 0;
  const pq = new PriorityQueue((a, b) => a[1] - b[1] || a[2] - b[2]);
  while (i < n || !pq.isEmpty()) {
    if (pq.isEmpty() && currentTime < tasks[i][0]) {
      currentTime = tasks[i][0];
    }

    while (i < n && currentTime >= tasks[i][0]) {
      pq.enqueue(tasks[i]);
      i++;
    }

    const [, duration, index] = pq.dequeue();
    currentTime += duration;
    result.push(index);
  }

  return result;
};

var tasks = [
  [1, 2],
  [2, 4],
  [3, 2],
  [4, 1],
];
var expected = [0, 2, 3, 1];
var result = getOrder(tasks);
console.log(result, result.join() === expected.join());

var tasks = [
  [7, 10],
  [7, 12],
  [7, 5],
  [7, 4],
  [7, 2],
];
var expected = [4, 3, 2, 0, 1];
var result = getOrder(tasks);
console.log(result, result.join() === expected.join());

var tasks = [
  [7, 10],
  [7, 12],
  [7, 5],
  [7, 4],
  [7, 2],
  [7, 10],
];
var expected = [4, 3, 2, 0, 5, 1];
var result = getOrder(tasks);
console.log(result, result.join() === expected.join());

var tasks = [
  [19, 13],
  [16, 9],
  [21, 10],
  [32, 25],
  [37, 4],
  [49, 24],
  [2, 15],
  [38, 41],
  [37, 34],
  [33, 6],
  [45, 4],
  [18, 18],
  [46, 39],
  [12, 24],
];
var expected = [6, 1, 2, 9, 4, 10, 0, 11, 5, 13, 3, 8, 12, 7];
var result = getOrder(tasks);
console.log(result, result.join() === expected.join());
