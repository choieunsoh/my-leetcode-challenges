// 2530. Maximal Score After Applying K Operations
// https://leetcode.com/problems/maximal-score-after-applying-k-operations/description/
// T.C.: O()
// S.C.: O()
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const maxNums = new MaxPriorityQueue();
  for (const num of nums) {
    maxNums.enqueue(num);
  }

  let score = 0;
  for (let i = 0; i < k; i++) {
    const maxNum = maxNums.dequeue().element;
    score += maxNum;
    maxNums.enqueue(Math.ceil(maxNum / 3));
  }

  return score;
};

var nums = [10, 10, 10, 10, 10],
  k = 5;
var expected = 50;
var result = maxKelements(nums, k);
console.log(result, result === expected);

var nums = [1, 10, 3, 3, 3],
  k = 3;
var expected = 17;
var result = maxKelements(nums, k);
console.log(result, result === expected);
