// 1296. Divide Array in Sets of K Consecutive Numbers
// https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
  const n = nums.length;
  if (n % k !== 0) return false;

  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, ~~countMap.get(num) + 1);
  }

  nums.sort((a, b) => a - b);
  for (const num of nums) {
    if (countMap.get(num) === 0) continue;
    for (let i = 0; i < k; i++) {
      const curNum = num + i;
      const count = ~~countMap.get(curNum);
      if (count === 0) {
        return false;
      }
      countMap.set(curNum, count - 1);
    }
  }
  return true;
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

var nums = [1, 1, 2, 2, 3, 3],
  k = 3;
var expected = true;
var result = isPossibleDivide(nums, k);
console.log(result, result === expected);
