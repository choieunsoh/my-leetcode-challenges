// https://leetcode.com/problems/longest-subsequence-with-limited-sum/
// 2389. Longest Subsequence With Limited Sum
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const sum = queries[i];
    let left = 0;
    let right = nums.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= sum) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === 0) {
      result.push(0);
    } else {
      result.push(left);
    }
  }
  return result;
};

var nums = [4, 5, 2, 1],
  queries = [3, 10, 21];
var expected = [2, 3, 4];
var result = answerQueries(nums, queries);
console.log(result, result.join() === expected.join());

var nums = [2, 3, 4, 5],
  queries = [1];
var expected = [0];
var result = answerQueries(nums, queries);
console.log(result, result.join() === expected.join());
