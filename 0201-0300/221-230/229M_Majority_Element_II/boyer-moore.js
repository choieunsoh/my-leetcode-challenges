// 229. Majority Element II
// https://leetcode.com/problems/majority-element-ii/
// Boyer-Moore Voting Algorithm
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let candidate1 = 0;
  let candidate2 = 1;
  let count1 = 0;
  let count2 = 0;
  const minCount = nums.length / 3;
  const result = [];
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  if (nums.filter((num) => num === candidate1).length > minCount) result.push(candidate1);
  if (nums.filter((num) => num === candidate2).length > minCount) result.push(candidate2);
  return result;
};

var nums = [3, 2, 3];
var expected = [3];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [1];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2];
var expected = [2, 1];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3];
var expected = [];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4];
var expected = [];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 2, 3, 3];
var expected = [2, 3];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 1, 3];
var expected = [2];
var result = majorityElement(nums);
console.log(result, result.join() === expected.join());
