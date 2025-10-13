// 2475. Number of Unequal Triplets in Array
// https://leetcode.com/problems/number-of-unequal-triplets-in-array/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const total = nums.length;
  let leftCount = 0;
  let triplets = 0;
  for (const [, midCount] of counts) {
    const rightCount = total - leftCount - midCount;
    triplets += leftCount * midCount * rightCount;
    leftCount += midCount;
  }
  return triplets;
};

var nums = [4, 4, 2, 4, 3];
var expected = 3;
var result = unequalTriplets(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1];
var expected = 0;
var result = unequalTriplets(nums);
console.log(result, result === expected);
