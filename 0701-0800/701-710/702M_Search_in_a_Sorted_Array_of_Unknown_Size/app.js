// 702. Search in a Sorted Array of Unknown Size
// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
  let left = 0;
  let right = 1e4;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const value = reader.get(mid);
    if (value === target) return mid;
    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

function ArrayReader(nums) {
  this.nums = nums;
  /*
  @param {number} index
  @return {number}
  */
  this.get = function (index) {
    return this.nums[index];
  };
}

var secret = [-1, 0, 3, 5, 9, 12],
  target = 9;
var expected = 4;
var reader = new ArrayReader(secret);
var result = search(reader, target);
console.log(result, result === expected);

var secret = [-1, 0, 3, 5, 9, 12],
  target = 2;
var expected = -1;
var reader = new ArrayReader(secret);
var result = search(reader, target);
console.log(result, result === expected);
