// 3505. Minimum Operations to Make Elements Within K Subarrays Equal
// https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/description/
// T.C.: O(n log n + n * k)
// S.C.: O(n * k)
const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, x, k) {
  const n = nums.length;
  const left = new MaxPriorityQueue();
  const right = new MinPriorityQueue();
  const delayed = new Map();
  let leftSize = 0;
  let rightSize = 0;
  let sumL = 0;
  let sumR = 0;
  const ops = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (left.isEmpty() || num <= left.front()) {
      left.enqueue(num);
      leftSize++;
      sumL += num;
    } else {
      right.enqueue(num);
      rightSize++;
      sumR += num;
    }
    balance();
    if (i >= x) {
      const num = nums[i - x];
      delayed.set(num, (delayed.get(num) || 0) + 1);
      if (num <= left.front()) {
        leftSize--;
        sumL -= num;
        if (num === left.front()) {
          prune(left);
        }
      } else {
        rightSize--;
        sumR -= num;
        if (num === right.front()) {
          prune(right);
        }
      }
      balance();
    }
    if (i >= x - 1) {
      const mid = left.front();
      ops[i] = sumR - sumL + mid * (leftSize - rightSize);
    }
  }

  const dp = Array.from({ length: n }, () => Array(k + 1).fill(Infinity));
  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }
  for (let j = 1; j <= k; j++) {
    if (j === 1) {
      dp[x - 1][j] = ops[x - 1];
    } else {
      dp[j * x - 1][j] = dp[(j - 1) * x - 1][j - 1] + ops[j * x - 1];
    }
  }
  for (let j = 1; j <= k; j++) {
    for (let i = j * x; i < n; i++) {
      dp[i][j] = Math.min(dp[i - x][j - 1] + ops[i], dp[i - 1][j]);
    }
  }
  return dp[n - 1][k];

  function prune(heap) {
    while (!heap.isEmpty() && (delayed.get(heap.front()) || 0) > 0) {
      const num = heap.dequeue();
      delayed.set(num, delayed.get(num) - 1);
    }
  }

  function balance() {
    if (leftSize > rightSize + 1) {
      const num = left.dequeue();
      right.enqueue(num);
      sumR += num;
      sumL -= num;
      rightSize++;
      leftSize--;
      prune(left);
    } else if (rightSize > leftSize) {
      const num = right.dequeue();
      left.enqueue(num);
      sumL += num;
      sumR -= num;
      leftSize++;
      rightSize--;
      prune(right);
    }
  }
};

var nums = [5, -2, 1, 3, 7, 3, 6, 4, -1],
  x = 3,
  k = 2;
var expected = 8;
var result = minOperations(nums, x, k);
console.log(result, result === expected);

var nums = [9, -2, -2, -2, 1, 5],
  x = 2,
  k = 2;
var expected = 3;
var result = minOperations(nums, x, k);
console.log(result, result === expected);
