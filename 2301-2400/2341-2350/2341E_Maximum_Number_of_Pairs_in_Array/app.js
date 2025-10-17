// 2341. Maximum Number of Pairs in Array
// https://leetcode.com/problems/maximum-number-of-pairs-in-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const counts = new Array(101).fill(0);
  for (const num of nums) {
    counts[num]++;
  }

  let pairs = 0;
  let oddCount = 0;
  for (let i = 0; i < counts.length; i++) {
    pairs += counts[i] >> 1;
    oddCount += counts[i] % 2;
  }
  return [pairs, oddCount];
};

var nums = [1, 3, 2, 1, 3, 2, 2];
var expected = [3, 1];
var result = numberOfPairs(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1];
var expected = [1, 0];
var result = numberOfPairs(nums);
console.log(result, result.join() === expected.join());

var nums = [0];
var expected = [0, 1];
var result = numberOfPairs(nums);
console.log(result, result.join() === expected.join());
