// https://leetcode.com/problems/3sum-closest/
// 16. 3Sum Closest
var threeSumClosest = function (nums: number[], target: number): number {
  let closestSum = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      if (sum < target) {
        left++;
      } else {
        right--;
      }
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
    }
  }
  return closestSum;
};

var nums = [-1, 2, 1, -4],
  target = 1;
var expected = 2;
var result = threeSumClosest(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0],
  target = 1;
var expected = 0;
var result = threeSumClosest(nums, target);
console.log(result, result === expected);
