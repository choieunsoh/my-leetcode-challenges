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
    const count = counts.get(num) ?? 0;
    if (count === 0) {
      sum += num;
    } else if (count === 1) {
      sum -= num;
    }
    counts.set(num, count + 1);
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
