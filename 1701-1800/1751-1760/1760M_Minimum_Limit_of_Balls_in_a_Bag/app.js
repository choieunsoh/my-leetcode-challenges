// 1760. Minimum Limit of Balls in a Bag
// https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description/
// T.C.: O(n log k)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1;
  let right = Math.max(...nums);
  let minPenalty = right;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (isPossible(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
      minPenalty = left;
    }
  }
  return minPenalty;

  function isPossible(ballsInBag) {
    let operations = 0;
    for (const num of nums) {
      operations += Math.ceil(num / ballsInBag) - 1;
      if (operations > maxOperations) {
        return false;
      }
    }
    return true;
  }
};

var nums = [9],
  maxOperations = 2;
var expected = 3;
var result = minimumSize(nums, maxOperations);
console.log(result, result === expected);

var nums = [2, 4, 8, 2],
  maxOperations = 4;
var expected = 2;
var result = minimumSize(nums, maxOperations);
console.log(result, result === expected);
