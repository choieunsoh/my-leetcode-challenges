// https://leetcode.com/problems/degree-of-an-array/
// 697. Degree of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let maxDegree = 0;
  let shortest = 0;
  const left = new Map();
  const right = new Map();
  const degree = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!left.has(num)) left.set(num, i);
    right.set(num, i);
    const count = degree.get(num) + 1 || 1;
    degree.set(num, count);
    if (count > maxDegree) {
      maxDegree = count;
      shortest = right.get(num) - left.get(num) + 1;
    } else if (count === maxDegree) {
      shortest = Math.min(shortest, right.get(num) - left.get(num) + 1);
    }
  }
  return shortest;
};

var nums = [1, 2, 2, 3, 1];
var expected = 2;
var result = findShortestSubArray(nums);
console.log(result, result === expected);

var nums = [1, 2, 2, 3, 1, 4, 2];
var expected = 6;
var result = findShortestSubArray(nums);
console.log(result, result === expected);
