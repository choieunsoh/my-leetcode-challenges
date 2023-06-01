// 2695. Array Wrapper
// https://leetcode.com/problems/array-wrapper/
/**
 * @param {number[]} nums
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
  this.sum = nums.reduce((sum, num) => sum + num, 0);
  this.string = `[${nums}]`;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.sum;
};

ArrayWrapper.prototype.toString = function () {
  return this.string;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
