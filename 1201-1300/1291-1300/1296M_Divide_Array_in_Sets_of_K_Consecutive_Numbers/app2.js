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

  const numMap = new Map();
  for (const num of nums) {
    numMap.set(num, ~~numMap.get(num) + 1);
  }

  const sortedNums = Uint32Array.from(numMap.keys()).sort();
  for (let i = sortedNums.length - 1; ~i; ) {
    let val = sortedNums[i];
    for (let limit = val - k; val > limit; val--) {
      const count = numMap.get(val);
      if (!count) return false;
      numMap.set(val, count - 1);
      if (count === 1 && val === sortedNums[i]) i--;
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
