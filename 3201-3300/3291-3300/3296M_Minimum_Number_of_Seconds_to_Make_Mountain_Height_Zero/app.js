// 3296. Minimum Number of Seconds to Make Mountain Height Zero
// https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/description/
// T.C.: O(n log(MH^2))
// S.C.: O(1)
/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function (mountainHeight, workerTimes) {
  const EPS = 1e-7;
  const maxWorkerTimes = Math.max(...workerTimes);
  let left = 1;
  let right = (maxWorkerTimes * mountainHeight * (mountainHeight + 1)) / 2;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (const t of workerTimes) {
      const work = Math.floor(mid / t);
      // find the largest k such that 1+2+...+k <= work
      const k = Math.floor((-1.0 + Math.sqrt(1 + work * 8)) / 2 + EPS);
      cnt += k;
    }

    if (cnt >= mountainHeight) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

var mountainHeight = 4,
  workerTimes = [2, 1, 1];
var expected = 3;
var result = minNumberOfSeconds(mountainHeight, workerTimes);
console.log(result, result === expected);

var mountainHeight = 10,
  workerTimes = [3, 2, 2, 4];
var expected = 12;
var result = minNumberOfSeconds(mountainHeight, workerTimes);
console.log(result, result === expected);

var mountainHeight = 5,
  workerTimes = [1];
var expected = 15;
var result = minNumberOfSeconds(mountainHeight, workerTimes);
console.log(result, result === expected);
