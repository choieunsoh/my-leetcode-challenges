// 4038. Count Integers Appearing in a Single Block
// https://leetcode.com/problems/count-integers-appearing-in-a-single-block/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
  }

  let result = 0;
  for (const count of map.values()) {
    if (count === 1) {
      result++;
    }
  }
  return result;
};

var nums = [1, 2, 2, 1];
var expected = 1;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);

var nums = [3, 3, 1, 2, 2, 1];
var expected = 2;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);

var nums = [22];
var expected = 1;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);

var nums = [11, 22];
var expected = 2;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);
