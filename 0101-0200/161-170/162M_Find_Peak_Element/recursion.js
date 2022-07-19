// https://leetcode.com/problems/find-peak-element/
// 162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  function find(left = 0, right = nums.length - 1) {
    if (left === right) return left;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return find(left, mid);
    }

    return find(mid + 1, right);
  }

  return find();
};

var nums = [1, 2, 3, 4];
var expected = 3;
console.log(findPeakElement(nums), expected);

var nums = [4, 3, 2, 1];
var expected = 0;
console.log(findPeakElement(nums), expected);

var nums = [1, 2];
var expected = 1;
console.log(findPeakElement(nums), expected);

var nums = [2, 1];
var expected = 0;
console.log(findPeakElement(nums), expected);

var nums = [1, 2, 3, 1];
var expected = 2;
console.log(findPeakElement(nums), expected);

var nums = [1, 2, 1, 3, 5, 6, 4];
var expected = 5;
console.log(findPeakElement(nums), expected);
