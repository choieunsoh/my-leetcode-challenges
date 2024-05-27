// 1608. Special Array With X Elements Greater Than or Equal X
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const n = nums.length;
  const counts = new Array(n + 1).fill(0);
  for (const num of nums) {
    counts[Math.min(n, num)]++;
  }

  let count = 0;
  for (let x = n; x >= 1; x--) {
    count += counts[x];
    if (count === x) return x;
  }
  return -1;
};

var nums = [3, 5];
var expected = 2;
var result = specialArray(nums);
console.log(result, result === expected);

var nums = [0, 0];
var expected = -1;
var result = specialArray(nums);
console.log(result, result === expected);

var nums = [0, 4, 3, 0, 4];
var expected = 3;
var result = specialArray(nums);
console.log(result, result === expected);
