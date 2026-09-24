// 4048. Count Values With Equally Spaced Occurrences I
// https://leetcode.com/problems/count-values-with-equally-spaced-occurrences-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function (nums) {
  const map = Array.from({ length: 101 }, () => []);
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]].push(i);
  }

  let count = 0;
  for (const indices of map) {
    if (indices.length !== 3) {
      continue;
    }
    const isEquallySpaced = indices[1] - indices[0] === indices[2] - indices[1];
    if (isEquallySpaced) {
      count++;
    }
  }
  return count;
};

var nums = [1, 8, 1, 5, 1, 5, 8, 5];
var expected = 2;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);

var nums = [8, 8, 8, 8];
var expected = 0;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);

var nums = [8, 6, 6, 8, 8];
var expected = 0;
var result = countSpecialIntegers(nums);
console.log(result, result === expected);
