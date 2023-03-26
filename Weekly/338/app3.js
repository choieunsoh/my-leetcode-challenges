/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {};

// 3 4 10 18
var nums = [3, 1, 6, 8],
  queries = [1, 5];
var expected = [14, 10];
var result = minOperations(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [2, 9, 6, 3],
  queries = [10];
var expected = [20];
var result = minOperations(nums, queries);
console.log(result, result.join() === expected.join());
