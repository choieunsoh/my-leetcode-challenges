// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let result = 0;
  const n = nums.length;
  const ps = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    ps[i + 1] = ps[i] + nums[i];
  }

  const counter = new Map();
  for (const sum of ps) {
    result += counter.get(sum) ?? 0;
    const target = sum + goal;
    const count = counter.get(target) ?? 0;
    counter.set(target, count + 1);
  }

  return result;
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
