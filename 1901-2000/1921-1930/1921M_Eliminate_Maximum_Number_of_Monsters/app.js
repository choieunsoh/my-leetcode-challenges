// 1921. Eliminate Maximum Number of Monsters
// https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
// T.C.: O(n log n)
// T.C.: O(n)
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const n = dist.length;
  const time = new Array(n);
  for (let i = 0; i < n; i++) {
    time[i] = dist[i] / speed[i];
  }
  time.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (time[i] <= i) break;
    result++;
  }
  return result;
};

var dist = [1, 3, 4],
  speed = [1, 1, 1];
var expected = 3;
var result = eliminateMaximum(dist, speed);
console.log(result, result === expected);

var dist = [1, 1, 2, 3],
  speed = [1, 1, 1, 1];
var expected = 1;
var result = eliminateMaximum(dist, speed);
console.log(result, result === expected);

var dist = [3, 2, 4],
  speed = [5, 3, 2];
var expected = 1;
var result = eliminateMaximum(dist, speed);
console.log(result, result === expected);

var dist = [3, 5, 7, 4, 5],
  speed = [2, 3, 6, 3, 2];
var expected = 2;
var result = eliminateMaximum(dist, speed);
console.log(result, result === expected);
