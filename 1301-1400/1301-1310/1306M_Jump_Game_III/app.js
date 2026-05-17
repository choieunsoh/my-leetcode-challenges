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
  if (start >= 0 && start < arr.length && arr[start] >= 0) {
    if (arr[start] == 0) {
      return true;
    }
    arr[start] = -arr[start];
    return canReach(arr, start + arr[start]) || canReach(arr, start - arr[start]);
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
