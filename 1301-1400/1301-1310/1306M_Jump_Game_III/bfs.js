// 1306. Jump Game III
// https://leetcode.com/problems/jump-game-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length;
  const queue = [start];
  while (queue.length) {
    const index = queue.shift();
    if (arr[index] === 0) return true;
    if (arr[index] < 0) continue;

    const left = index - arr[index];
    const right = index + arr[index];

    arr[index] = -arr[index];

    if (left >= 0) queue.push(left);
    if (right < n) queue.push(right);
  }
  return false;
};

var arr = [4, 2, 3, 0, 3, 1, 2],
  start = 5;
var expected = true;
var result = canReach(arr, start);
console.log(result, result === expected);

var arr = [4, 2, 3, 0, 3, 1, 2],
  start = 0;
var expected = true;
var result = canReach(arr, start);
console.log(result, result === expected);

var arr = [3, 0, 2, 1, 2],
  start = 2;
var expected = false;
var result = canReach(arr, start);
console.log(result, result === expected);
