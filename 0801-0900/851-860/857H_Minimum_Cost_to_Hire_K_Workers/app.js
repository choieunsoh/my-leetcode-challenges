// 857. Minimum Cost to Hire K Workers
// https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/
// T.C.: O(n log n + n log k)
// S.C.: O(n + k)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const wageToQualityRatio = [];
  for (let i = 0; i < n; i++) {
    const ratio = wage[i] / quality[i];
    wageToQualityRatio.push([ratio, quality[i]]);
  }
  wageToQualityRatio.sort((a, b) => a[0] - b[0]);

  let result = Number.MAX_SAFE_INTEGER;
  let currentTotalQuality = 0;
  const highestQualityWorker = new PriorityQueue((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    const [currentRatio, currentQuality] = wageToQualityRatio[i];
    highestQualityWorker.enqueue(currentQuality);
    currentTotalQuality += currentQuality;

    if (highestQualityWorker.size() > k) {
      currentTotalQuality -= highestQualityWorker.dequeue();
    }

    if (highestQualityWorker.size() === k) {
      result = Math.min(result, currentTotalQuality * currentRatio);
    }
  }

  return Math.round(result * 1e5) / 1e5;
};

var quality = [10, 20, 5],
  wage = [70, 50, 30],
  k = 2;
var expected = 105.0;
var result = mincostToHireWorkers(quality, wage, k);
console.log(result, result === expected);

var quality = [3, 1, 10, 10, 1],
  wage = [4, 8, 2, 2, 7],
  k = 3;
var expected = 30.66667;
var result = mincostToHireWorkers(quality, wage, k);
console.log(result, result === expected);
