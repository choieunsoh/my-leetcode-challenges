// 2422. Merge Operations to Turn Array Into a Palindrome
// https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let ops = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] < nums[right]) {
      left++;
      nums[left] += nums[left - 1];
      ops++;
    } else {
      right--;
      nums[right] += nums[right + 1];
      ops++;
    }
  }

  return ops;
};

var nums = [4, 3, 2, 1, 2, 3, 1];
var expected = 2;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 3;
var result = minimumOperations(nums);
console.log(result, result === expected);
