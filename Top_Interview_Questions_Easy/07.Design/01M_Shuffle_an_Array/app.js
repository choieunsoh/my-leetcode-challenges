// https://leetcode.com/problems/shuffle-an-array/
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = [...nums];
  this.original = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  this.nums.sort(() => Math.random() - 0.5);
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
