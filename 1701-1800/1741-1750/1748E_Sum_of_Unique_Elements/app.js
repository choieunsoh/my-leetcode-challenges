// 1748. Sum of Unique Elements
// https://leetcode.com/problems/sum-of-unique-elements/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  const counts = new Map();
  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }
  for (const [num, count] of counts) {
    if (count === 1) sum += num;
  }
  return sum;
};

var nums = [1, 2, 3, 2];
var expected = 4;
var result = sumOfUnique(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1];
var expected = 0;
var result = sumOfUnique(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 15;
var result = sumOfUnique(nums);
console.log(result, result === expected);
