// https://leetcode.com/problems/first-missing-positive/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let N = nums.length;
  if (N === 1) {
    return nums[0] === 1 ? 2 : 1;
  }

  if (nums.some((n) => n === 1) === false) return 1;

  for (let i = 0; i < N; i++) {
    if (nums[i] <= 0 || nums[i] > N) nums[i] = 1;
  }
  for (let i = 0; i < N; i++) {
    nums[(nums[i] - 1) % N] += N;
  }
  console.log(nums.join());
  for (let i = 0; i < N; i++) {
    if (nums[i] <= N) return i + 1;
  }

  return N + 1;
};

var nums = [2, 1];
console.log(firstMissingPositive(nums));

var nums = [1, 1];
console.log(firstMissingPositive(nums));

var nums = [-2];
console.log(firstMissingPositive(nums));

var nums = [0];
console.log(firstMissingPositive(nums));

var nums = [2];
console.log(firstMissingPositive(nums));

var nums = [1];
console.log(firstMissingPositive(nums));

var nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));

var nums = [1, 2, 0];
console.log(firstMissingPositive(nums));

var nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));

var nums = [3, 2];
console.log(firstMissingPositive(nums));

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
console.log(firstMissingPositive(nums));
