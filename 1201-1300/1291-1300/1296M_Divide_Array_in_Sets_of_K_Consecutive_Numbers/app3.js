// 1296. Divide Array in Sets of K Consecutive Numbers
// https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  const n = nums.length;
  if (n % k !== 0) return false;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) continue;
    if (!isValid(i)) return false;
  }
  return true;

  function isValid(i) {
    let count = 0;
    let next = nums[i];
    while (i < n && count < k) {
      if (nums[i] === next) {
        next++;
        count++;
        nums[i] *= -1;
      }
      i++;
    }
    return count === k;
  }
};

var nums = [1, 2, 3, 3, 4, 4, 5, 6],
  k = 4;
var expected = true;
var result = isPossibleDivide(nums, k);
console.log(result, result === expected);

var nums = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11],
  k = 3;
var expected = true;
var result = isPossibleDivide(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  k = 3;
var expected = false;
var result = isPossibleDivide(nums, k);
console.log(result, result === expected);
