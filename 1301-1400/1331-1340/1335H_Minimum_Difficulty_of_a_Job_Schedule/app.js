// 1335. Minimum Difficulty of a Job Schedule
// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
// T.C.: O(N * M)
// S.C.: O(N)
/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (n < d) {
    return -1;
  }

  // min_diff_curr_day and min_diff_prev_day record the minimum total job difficulty
  // for the current day and previous day, respectively
  let minDiffPrevDay = new Array(n).fill(1000);
  let minDiffCurrDay = new Array(n).fill(0);
  let tmp;

  const stack = [];
  for (let day = 0; day < d; day++) {
    // Use a monotonically decreasing stack to record job difficulties
    stack.length = 0;
    // The number of jobs needs to be no less than number of days passed.
    for (let i = day; i < n; i++) {
      // We initialize min_diff_curr_day[i] as only performing 1 job at the i-th index.
      // At day 0, the minimum total job difficulty is to complete the 0th job only.
      // Otherwise, we increment min_diff_prev_day[i - 1] by the i-th job difficulty
      minDiffCurrDay[i] = i > 0 ? minDiffPrevDay[i - 1] + jobDifficulty[i] : jobDifficulty[i];

      // When we find the last element in the stack is smaller than or equal to current job,
      // we need to pop out the element to maintain a monotonic decreasing stack.
      while (stack.length && jobDifficulty[stack[stack.length - 1]] <= jobDifficulty[i]) {
        // If we include all jobs with index j+1 to i to the current d,
        // total job difficulty of the current d will be increased
        // by the amount of jobDifficulty[i] - jobDifficulty[j]
        const j = stack.pop();
        const diffIncr = jobDifficulty[i] - jobDifficulty[j];
        minDiffCurrDay[i] = Math.min(minDiffCurrDay[i], minDiffCurrDay[j] + diffIncr);
      }

      // When the last element in the stack is larger than current element,
      // if we include all jobs with index j+1 to i to the current d
      // the overall job difficulty will not change
      if (stack.length) {
        minDiffCurrDay[i] = Math.min(minDiffCurrDay[i], minDiffCurrDay[stack[stack.length - 1]]);
      }

      // Update the monotonic stack by adding in the current index
      stack.push(i);
    }

    tmp = minDiffPrevDay;
    minDiffPrevDay = minDiffCurrDay;
    minDiffCurrDay = tmp;
  }
  return minDiffPrevDay[n - 1];
};

var jobDifficulty = [6, 5, 4, 3, 2, 1],
  d = 2;
var expected = 7;
var result = minDifficulty(jobDifficulty, d);
console.log(result, result === expected);

var jobDifficulty = [9, 9, 9],
  d = 4;
var expected = -1;
var result = minDifficulty(jobDifficulty, d);
console.log(result, result === expected);

var jobDifficulty = [1, 1, 1],
  d = 3;
var expected = 3;
var result = minDifficulty(jobDifficulty, d);
console.log(result, result === expected);
