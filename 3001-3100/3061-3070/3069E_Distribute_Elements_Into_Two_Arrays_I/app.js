// 3069. Distribute Elements Into Two Arrays I
// https://leetcode.com/problems/distribute-elements-into-two-arrays-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const n = nums.length;
  const result1 = [nums[0]];
  const result2 = [nums[1]];
  for (let i = 2; i < n; i++) {
    if (result1[result1.length - 1] > result2[result2.length - 1]) {
      result1.push(nums[i]);
    } else {
      result2.push(nums[i]);
    }
  }
  return result1.concat(result2);
};

var nums = [2, 1, 3];
var expected = [2, 3, 1];
var result = resultArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 4, 3, 8];
var expected = [5, 3, 4, 8];
var result = resultArray(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 4];
var expected = [1, 2, 4];
var result = resultArray(nums);
console.log(result, result.join() === expected.join());
