// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
function productExceptSelf_PrefixSum(nums: number[]): number[] {
  const leftProduct: number[] = Array(nums.length).fill(1);
  const rightProduct: number[] = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    leftProduct[i] *= rightProduct[i];
  }
  return leftProduct;
}

var nums = [1, 2, 3, 4];
var expected = [24, 12, 8, 6];
var result = productExceptSelf_PrefixSum(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 1, 0, -3, 3];
var expected = [0, 0, 9, 0, 0];
var result = productExceptSelf_PrefixSum(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 0, 0, -3, 3];
var expected = [0, 0, 0, 0, 0];
var result = productExceptSelf_PrefixSum(nums);
console.log(result, result.join() === expected.join());
