// 2148. Count Elements With Strictly Smaller and Greater Elements
// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let count = 0;
  for (const num of nums) {
    if (num > min && num < max) {
      count++;
    }
  }
  return count;
};

var nums = [11, 7, 2, 15];
var expected = 2;
var result = countElements(nums);
console.log(result, result === expected);

var nums = [-3, 3, 3, 90];
var expected = 2;
var result = countElements(nums);
console.log(result, result === expected);
