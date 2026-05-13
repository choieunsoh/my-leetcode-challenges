// 1674. Minimum Moves to Make Array Complementary
// https://leetcode.com/problems/minimum-moves-to-make-array-complementary/description/
// T.C.: O(n log n + L log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const n = nums.length;
  const sumCount = new Map();
  const minArr = [];
  const maxArr = [];
  for (let i = 0; i < n / 2; i++) {
    const a = Math.min(nums[i], nums[n - 1 - i]);
    const b = Math.max(nums[i], nums[n - 1 - i]);

    const sum = a + b;
    sumCount.set(sum, (sumCount.get(sum) ?? 0) + 1);

    minArr.push(a);
    maxArr.push(b);
  }

  minArr.sort((x, y) => x - y);
  maxArr.sort((x, y) => x - y);

  let minOps = n;
  for (let c = 2; c <= 2 * limit; c++) {
    const addLeft = n / 2 - lowerBound(minArr, c);
    const addRight = lowerBound(maxArr, c - limit);

    const currentOps = n / 2 + addLeft + addRight - (sumCount.get(c) ?? 0);
    minOps = Math.min(minOps, currentOps);
  }
  return minOps;

  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = left + ((right - left) >>> 1);
      if (arr[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

var nums = [1, 2, 4, 3],
  limit = 4;
var expected = 1;
var result = minMoves(nums, limit);
console.log(result, result === expected);

var nums = [1, 2, 2, 1],
  limit = 2;
var expected = 2;
var result = minMoves(nums, limit);
console.log(result, result === expected);

var nums = [1, 2, 1, 2],
  limit = 2;
var expected = 0;
var result = minMoves(nums, limit);
console.log(result, result === expected);
