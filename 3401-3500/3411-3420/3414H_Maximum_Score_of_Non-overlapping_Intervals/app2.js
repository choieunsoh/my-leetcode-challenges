// 3414. Maximum Score of Non-overlapping Intervals
// https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function (intervals) {
  const newIntervals = intervals.map((val, ind) => [...val, ind]);
  newIntervals.sort((a, b) => a[0] - b[0]);

  const memo = new Map();
  const ans = maxScore(0, 4);
  return ans[1].sort((a, b) => a - b);

  function findNei(startInd, lowerEnd) {
    let l = startInd;
    let r = newIntervals.length - 1;
    let res = -1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const midIntervalStart = newIntervals[mid][0];
      if (midIntervalStart > lowerEnd) {
        res = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return res;
  }

  function maxScore(ind, k) {
    const key = `${ind}-${k}`;
    if (memo.has(key)) return memo.get(key);
    if (k === 0) return [0, [], Infinity];
    if (ind === newIntervals.length) return [0, [], Infinity];

    // take
    const neiInd = findNei(ind + 1, newIntervals[ind][1]);
    const [score, indices, minInd] = neiInd === -1 ? [0, [], Infinity] : maxScore(neiInd, k - 1);
    const [curScore, orgInd] = newIntervals[ind].slice(2);

    const takeScore = score + curScore;
    const takeIndices = [orgInd, ...indices];
    const takeMinInd = Math.min(orgInd, minInd);

    // no take
    const [noTakeScore, noTakeIndices, noTakeMinInd] = maxScore(ind + 1, k);

    let result;
    if (noTakeScore > takeScore) {
      result = [noTakeScore, noTakeIndices, noTakeMinInd];
    } else if (noTakeScore < takeScore) {
      result = [takeScore, takeIndices, takeMinInd];
    } else {
      if (takeMinInd <= noTakeMinInd) {
        result = [takeScore, takeIndices, takeMinInd];
      } else {
        result = [noTakeScore, noTakeIndices, noTakeMinInd];
      }
    }

    memo.set(key, result);
    return result;
  }
};

var intervals = [
  [1, 3, 2],
  [4, 5, 2],
  [1, 5, 5],
  [6, 9, 3],
  [6, 7, 1],
  [8, 9, 1],
];
var expected = [2, 3];
var result = maximumWeight(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [5, 8, 1],
  [6, 7, 7],
  [4, 7, 3],
  [9, 10, 6],
  [7, 8, 2],
  [11, 14, 3],
  [3, 5, 5],
];
var expected = [1, 3, 5, 6];
var result = maximumWeight(intervals);
console.log(result, result.join() === expected.join());
