// 2748. Number of Beautiful Pairs
// https://leetcode.com/problems/number-of-beautiful-pairs/
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let result = 0;
  const n = nums.length;
  const firstDigits = new Array(n);
  for (let i = 0; i < n; i++) {
    const num = String(nums[i]).split('');
    firstDigits[i] = Number(num[0]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const first = firstDigits[i];
      const last = nums[j] % 10;
      const coPrime = gcd(first, last);
      if (coPrime === 1) result++;
    }
  }
  return result;

  function gcd(a, b) {
    return a === 0 ? b : gcd(b % a, a);
  }
};

var nums = [2, 5, 1, 4];
var expected = 5;
var result = countBeautifulPairs(nums);
console.log(result, result === expected);

var nums = [11, 21, 12];
var expected = 2;
var result = countBeautifulPairs(nums);
console.log(result, result === expected);
