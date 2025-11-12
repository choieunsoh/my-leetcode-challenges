// 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
// https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/description/
// T.C.: O(n^2 log m)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let ones = 0;
  let g = 0;
  for (const num of nums) {
    if (num === 1) ones++;
    g = gcd(g, num);
  }

  if (ones > 0) return n - ones;
  if (g > 1) return -1;

  let minLen = n;
  for (let i = 0; i < n; i++) {
    let currentGcd = 0;
    for (let j = i; j < n; j++) {
      currentGcd = gcd(currentGcd, nums[j]);
      if (currentGcd === 1) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen + n - 2;

  function gcd(a, b) {
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};

var nums = [2, 6, 3, 4];
var expected = 4;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [2, 10, 6, 14];
var expected = -1;
var result = minOperations(nums);
console.log(result, result === expected);
