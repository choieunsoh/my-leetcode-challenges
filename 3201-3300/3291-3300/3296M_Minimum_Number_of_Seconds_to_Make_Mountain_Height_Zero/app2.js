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
  const fastestWorkerTime = Math.min(...workerTimes);

  // Worst case: the fastest worker clears the whole mountain alone.
  const maxSearchSeconds = (fastestWorkerTime * mountainHeight * (mountainHeight + 1)) / 2;

  function canClearMountainWithin(targetSeconds) {
    let totalHeightCleared = 0;

    for (const workerTime of workerTimes) {
      // Solve:
      // workerTime * k * (k + 1) / 2 <= targetSeconds
      // k^2 + k - (2 * targetSeconds / workerTime) <= 0
      let maxHeightThisWorkerCanClear = Math.floor((Math.sqrt(1 + 8 * (targetSeconds / workerTime)) - 1) / 2);

      // Small precision guard in case Math.sqrt lands slightly off.
      while ((workerTime * maxHeightThisWorkerCanClear * (maxHeightThisWorkerCanClear + 1)) / 2 > targetSeconds) {
        maxHeightThisWorkerCanClear--;
      }

      while (
        (workerTime * (maxHeightThisWorkerCanClear + 1) * (maxHeightThisWorkerCanClear + 2)) / 2 <=
        targetSeconds
      ) {
        maxHeightThisWorkerCanClear++;
      }

      totalHeightCleared += maxHeightThisWorkerCanClear;

      if (totalHeightCleared >= mountainHeight) {
        return true;
      }
    }

    return false;
  }

  let lowSeconds = 0;
  let highSeconds = maxSearchSeconds;

  while (lowSeconds < highSeconds) {
    const midSeconds = lowSeconds + Math.floor((highSeconds - lowSeconds) / 2);

    if (canClearMountainWithin(midSeconds)) {
      highSeconds = midSeconds;
    } else {
      lowSeconds = midSeconds + 1;
    }
  }

  return lowSeconds;
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
