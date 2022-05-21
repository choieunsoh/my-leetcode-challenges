/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  let result = [];
  let N = nums.length;
  for (let i = 0; i < N; i++) {
    result[(i + k) % N] = nums[i];
  }
  for (let i = 0; i < N; i++) {
    nums[i] = result[i];
  }
}

var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
rotate(nums, k);

(nums = [-1, -100, 3, 99]), (k = 2);
rotate(nums, k);
