// 3867. Sum of GCD of Formed Pairs
// https://leetcode.com/problems/sum-of-gcd-of-formed-pairs/description/
// T.C.: O(n log n + n log m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
  const n = nums.length;
  const mx = new Array(n);
  let prefixMax = -Infinity;
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i]);
    mx[i] = prefixMax;
  }

  const prefixGcd = new Array(n);
  for (let i = 0; i < n; i++) {
    prefixGcd[i] = gcd(nums[i], mx[i]);
  }

  prefixGcd.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    result += gcd(prefixGcd[left], prefixGcd[right]);
    left++;
    right--;
  }
  return result;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
};

var nums = [2, 6, 4];
var expected = 2;
var result = gcdSum(nums);
console.log(result, result === expected);

var nums = [3, 6, 2, 8];
var expected = 5;
var result = gcdSum(nums);
console.log(result, result === expected);
