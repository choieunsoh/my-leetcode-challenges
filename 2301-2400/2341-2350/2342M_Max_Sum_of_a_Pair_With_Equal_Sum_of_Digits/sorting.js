// 2342. Max Sum of a Pair With Equal Sum of Digits
// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let maxSum = -1;
  const pairs = [];
  for (const num of nums) {
    const sum = sumDigit(num);
    pairs.push([sum, num]);
  }

  pairs.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] === pairs[i - 1][0]) {
      maxSum = Math.max(maxSum, pairs[i][1] + pairs[i - 1][1]);
    }
  }
  return maxSum;

  function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var nums = [18, 43, 36, 13, 7];
var expected = 54;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [10, 12, 19, 14];
var expected = -1;
var result = maximumSum(nums);
console.log(result, result === expected);

var nums = [18, 43, 36, 13, 7, 27, 45];
var expected = 81;
var result = maximumSum(nums);
console.log(result, result === expected);
