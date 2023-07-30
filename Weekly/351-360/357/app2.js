/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  let result = 0;
  const n = nums.length;
  const size = new Set(nums).size;
  for (let i = 0; i < n; i++) {
    const curr = new Set();
    for (let j = i; j < n; j++) {
      curr.add(nums[j]);
      result += (curr.size / size) | 0;
    }
  }
  return result;
};

var nums = [1, 3, 1, 2, 2];
var expected = 4;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 5];
var expected = 10;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 4];
var expected = 3;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 5, 5];
var expected = 5;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 5, 4, 5];
var expected = 5;
var result = countCompleteSubarrays(nums);
console.log(result, result === expected);
