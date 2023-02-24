// 1675. Minimize Deviation in Array
// https://leetcode.com/problems/minimize-deviation-in-array/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  const pq = new MaxPriorityQueue();
  let min = Number.MAX_VALUE;
  for (let num of nums) {
    if (num % 2 === 1) num *= 2;
    pq.enqueue(num);
    min = Math.min(min, num);
  }

  let diff = Number.MAX_VALUE;
  while (pq.front() % 2 === 0) {
    let max = pq.dequeue();
    diff = Math.min(diff, max - min);
    max /= 2;
    pq.enqueue(max);
    min = Math.min(min, max);
  }

  return Math.min(diff, pq.front() - min);
};

var nums = [1, 2, 3, 4];
var expected = 1;
var result = minimumDeviation(nums);
console.log(result, result === expected);

var nums = [4, 1, 5, 20, 3];
var expected = 3;
var result = minimumDeviation(nums);
console.log(result, result === expected);

var nums = [2, 10, 8];
var expected = 3;
var result = minimumDeviation(nums);
console.log(result, result === expected);
