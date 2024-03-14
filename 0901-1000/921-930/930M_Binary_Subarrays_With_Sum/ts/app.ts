// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(1)
var numSubarraysWithSum = function (nums: number[], goal: number): number {
  var slidingWindow = function (nums: number[], goal: number): number {
    let currentCount = 0;
    let start = 0;
    let currentSum = 0;
    for (let end = 0; end < nums.length; end++) {
      currentSum += nums[end];
      while (start <= end && currentSum > goal) {
        currentSum -= nums[start++];
      }

      currentCount += end - start + 1;
    }
    return currentCount;
  };

  return slidingWindow(nums, goal) - slidingWindow(nums, goal - 1);
};

var nums = [1, 0, 1, 0, 1],
  goal = 2;
var expected = 4;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0],
  goal = 0;
var expected = 15;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);

var nums = [1, 0, 0, 1, 0, 1],
  goal = 2;
var expected = 5;
var result = numSubarraysWithSum(nums, goal);
console.log(result, result === expected);
