/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
  let max = 0;
  let i = 0;
  const n = nums.length;
  const counter = new Map();
  for (let j = 0; j < n; j++) {
    const num = nums[j];
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
    max = Math.max(max, count + 1);
    if (j - i + 1 - max > k) {
      const num = nums[i++];
      const count = counter.get(num);
      counter.set(num, count - 1);
    }
  }
  return max;
};

var nums = [1, 3, 2, 3, 1, 3],
  k = 3;
var expected = 3;
var result = longestEqualSubarray(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 2, 2, 1, 1],
  k = 2;
var expected = 4;
var result = longestEqualSubarray(nums, k);
console.log(result, result === expected);

var nums = [1, 3, 2, 3, 3, 1, 4, 4, 3],
  k = 3;
var expected = 3;
var result = longestEqualSubarray(nums, k);
console.log(result, result === expected);
