// 945. Minimum Increment to Make Array Unique
// https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/
// T.C.: O(n + max)
// S.C.: O(n + max)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  let result = 0;
  const n = nums.length;
  const max = Math.max(...nums);
  const counts = new Array(max + n).fill(0);
  for (const num of nums) {
    counts[num]++;
  }

  for (let num = 0; num < counts.length; num++) {
    if (counts[num] < 2) continue;
    const duplicates = counts[num] - 1;
    counts[num + 1] += duplicates;
    counts[num] = 1;
    result += duplicates;
  }

  return result;
};

var nums = [1, 2, 2];
var expected = 1;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);

var nums = [3, 2, 1, 2, 1, 7];
var expected = 6;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);

var nums = [0, 0];
var expected = 1;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);

// 0 1 3
// 0 1 1 2
var nums = [2, 2, 2, 1];
var expected = 3;
var result = minIncrementForUnique(nums);
console.log(result, result === expected);
