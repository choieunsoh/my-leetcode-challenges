// https://leetcode.com/problems/next-greater-element-i/
// 496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const nextNums = new Map();
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    while (stack.length > 0 && current > stack[stack.length - 1]) {
      nextNums.set(stack.pop(), current);
    }
    stack.push(current);
  }

  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nextNums.has(nums1[i])) {
      result.push(nextNums.get(nums1[i]));
    } else {
      result.push(-1);
    }
  }

  return result;
};

var nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
var expected = [-1, 3, -1];
var result = nextGreaterElement(nums1, nums2);
console.log(result, expected.join() === result.join());

var nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];
var expected = [3, -1];
var result = nextGreaterElement(nums1, nums2);
console.log(result, expected.join() === result.join());

var nums1 = [1, 3, 5, 2, 4],
  nums2 = [6, 5, 4, 3, 2, 1, 7];
var expected = [7, 7, 7, 7, 7];
var result = nextGreaterElement(nums1, nums2);
console.log(result, expected.join() === result.join());
