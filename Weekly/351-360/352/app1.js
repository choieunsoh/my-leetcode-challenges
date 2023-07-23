/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let result = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const numL = nums[i];
    if (numL % 2 === 1 || numL > threshold) continue;
    let next = 1;
    for (let j = i; j < n; j++) {
      const numR = nums[j];
      if (numR % 2 === next || numR > threshold) break;
      next ^= 1;
      result = Math.max(result, j - i + 1);
    }
  }
  return result;
};

var nums = [3, 2, 5, 4],
  threshold = 5;
var expected = 3;
var result = longestAlternatingSubarray(nums, threshold);
console.log(result, result === expected);

var nums = [1, 2],
  threshold = 2;
var expected = 1;
var result = longestAlternatingSubarray(nums, threshold);
console.log(result, result === expected);

var nums = [2, 3, 4, 5],
  threshold = 4;
var expected = 3;
var result = longestAlternatingSubarray(nums, threshold);
console.log(result, result === expected);
