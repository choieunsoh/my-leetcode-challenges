// 502. IPO
// https://leetcode.com/problems/ipo/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const n = profits.length;
  const projects = Array(n);
  for (let i = 0; i < n; i++) {
    projects[i] = [capital[i], profits[i]];
  }
  projects.sort((a, b) => a[0] - b[0]);

  const pq = new MaxPriorityQueue();
  let index = 0;
  for (let i = 0; i < k; i++) {
    while (index < n && projects[index][0] <= w) {
      pq.enqueue(projects[index++][1]);
    }
    if (pq.isEmpty()) break;
    w += pq.dequeue();
  }

  return w;
};

var k = 2,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 1];
var expected = 4;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);

var k = 3,
  w = 0,
  profits = [1, 2, 3],
  capital = [0, 1, 2];
var expected = 6;
var result = findMaximizedCapital(k, w, profits, capital);
console.log(result, result === expected);
