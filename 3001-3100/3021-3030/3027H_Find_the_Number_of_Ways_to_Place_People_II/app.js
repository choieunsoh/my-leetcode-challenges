// 3027. Find the Number of Ways to Place People II
// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  const n = points.length;
  points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let count = 0;
  for (let i = 0; i < n; i++) {
    const [, yA] = points[i];
    let currentMax = Number.MIN_SAFE_INTEGER;
    for (let j = i + 1; j < n; j++) {
      const [, yB] = points[j];
      if (yA < yB) continue;
      if (currentMax >= yB) continue;
      currentMax = Math.max(currentMax, yB);
      count++;
    }
  }
  return count;
};

var points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
var expected = 0;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [6, 2],
  [4, 4],
  [2, 6],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [3, 1],
  [1, 3],
  [1, 1],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [0, 1],
  [1, 3],
  [6, 1],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);
