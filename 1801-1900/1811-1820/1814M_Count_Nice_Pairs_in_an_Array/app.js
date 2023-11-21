// 1814. Count Nice Pairs in an Array
// https://leetcode.com/problems/count-nice-pairs-in-an-array/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  let result = 0;
  const MOD = 1e9 + 7;
  const map = new Map();
  for (const num of nums) {
    const value = num - rev(num);
    const count = map.get(value) ?? 0;
    result = (result + count) % MOD;
    map.set(value, count + 1);
  }
  return result;

  function rev(num) {
    let result = 0;
    while (num > 0) {
      result = result * 10 + (num % 10);
      num = (num / 10) | 0;
    }
    return result;
  }
};

var nums = [42, 11, 1, 97];
var expected = 2;
var result = countNicePairs(nums);
console.log(result, result === expected);

var nums = [13, 10, 35, 24, 76];
var expected = 4;
var result = countNicePairs(nums);
console.log(result, result === expected);
