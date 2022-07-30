// https://leetcode.com/problems/range-sum-query-immutable/
// 303. Range Sum Query - Immutable
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = [0];
  for (let i = 0; i < nums.length; i++) {
    this.nums[i + 1] = this.nums[i] + nums[i];
  }
  console.log(this.nums);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.nums[right + 1] - this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var nums = [-2, 0, 3, -5, 2, -1];
var data = [
  [0, 2, 1],
  [2, 5, -1],
  [0, 5, 3],
];
var obj = new NumArray(nums);
for (var i = 0; i < data.length; i++) {
  var [left, right, expected] = data[i];
  console.log(obj.sumRange(left, right), expected);
}
