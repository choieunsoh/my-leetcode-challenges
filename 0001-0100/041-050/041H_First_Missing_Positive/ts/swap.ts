// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/
var firstMissingPositive = function (nums: number[]): number {
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    if (nums[i] > 0 && nums[i] <= N) {
      const pos = nums[i] - 1;
      if (nums[i] !== nums[pos]) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
        i--;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return N + 1;
};

var nums = [2, 1];
var expected = 3;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [1, 1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [-2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [0];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [2, 8, 9, 11, 12];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 0];
var expected = 3;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [3, 4, -1, 1];
var expected = 2;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [3, 2];
var expected = 1;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
var expected = 10;
var result = firstMissingPositive(nums);
console.log(result, expected, result === expected);
