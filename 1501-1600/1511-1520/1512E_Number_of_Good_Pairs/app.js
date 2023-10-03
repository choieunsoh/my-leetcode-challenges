// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const counter = new Map();
  for (const num of nums) {
    const pairs = counter.get(num) ?? 0;
    counter.set(num, pairs + 1);
  }

  let result = 0;
  for (const [, pairs] of counter) {
    result += ((pairs - 1) * pairs) / 2;
  }

  return result;
};

var nums = [1, 2, 3, 1, 1, 3];
var expected = 4;
var result = numIdenticalPairs(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1];
var expected = 6;
var result = numIdenticalPairs(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 0;
var result = numIdenticalPairs(nums);
console.log(result, result === expected);

var nums = [100];
var expected = 0;
var result = numIdenticalPairs(nums);
console.log(result, result === expected);

var nums = new Array(100).fill(100);
var expected = 4950;
var result = numIdenticalPairs(nums);
console.log(result, result === expected);
