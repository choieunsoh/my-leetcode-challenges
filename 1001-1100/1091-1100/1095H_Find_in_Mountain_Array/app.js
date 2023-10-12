// 1095. Find in Mountain Array
// https://leetcode.com/problems/find-in-mountain-array/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  let left = 0;
  let right = mountainArr.length() - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const pivot = left;
  if (mountainArr.get(pivot) === target) {
    return pivot;
  }

  left = 0;
  right = pivot - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (mountainArr.get(mid) === target) return mid;
    if (mountainArr.get(mid) < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = pivot + 1;
  right = mountainArr.length() - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (mountainArr.get(mid) === target) return mid;
    if (mountainArr.get(mid) > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

class MountainArray {
  constructor(nums) {
    this.nums = nums;
  }
  length() {
    return this.nums.length;
  }
  get(index) {
    return this.nums[index];
  }
}

var array = [1, 2, 3, 4, 5, 3, 1],
  target = 3;
var expected = 2;
var mountainArr = new MountainArray(array);
var result = findInMountainArray(target, mountainArr);
console.log(result, result === expected);

var array = [0, 1, 2, 4, 2, 1],
  target = 3;
var expected = -1;
var mountainArr = new MountainArray(array);
var result = findInMountainArray(target, mountainArr);
console.log(result, result === expected);
