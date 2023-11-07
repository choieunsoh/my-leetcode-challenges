// 1921. Eliminate Maximum Number of Monsters
// https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
// T.C.: O(n)
// T.C.: O(1)
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const n = dist.length;
  for (let i = 0; i < dist.length; i++) {
    dist[i] = Math.ceil(dist[i] / speed[i]);
    speed[i] = 0;
  }

  for (const num of dist) {
    if (num >= n) continue;
    speed[num]++;
  }

  for (let i = 1; i < n; i++) {
    speed[i] += speed[i - 1];
    if (speed[i] > i) {
      return i;
    }
  }
  return n;
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
