// 3660. Jump Game IX
// https://leetcode.com/problems/jump-game-ix/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(0);
  const prevMax = new Array(n);
  nums.reduce(
    (prev, value, index) => {
      if (value > prev[0]) {
        prev = [value, index];
      }
      return (prevMax[index] = [...prev]);
    },
    [-Infinity, -1]
  );

  process(n - 1, Infinity, 0);
  return result;

  function process(r, rightMin, rightMax) {
    const [pMax, pivotIndex] = prevMax[r];
    const currMax = pMax <= rightMin ? pMax : rightMax;

    let nextRightMin = Math.min(pMax, rightMin);
    for (let i = pivotIndex; i <= r; i++) {
      result[i] = currMax;
      nextRightMin = Math.min(nextRightMin, nums[i]);
    }

    if (pivotIndex === 0) {
      return;
    }

    process(pivotIndex - 1, nextRightMin, currMax);
  }
};

var nums = [2, 1, 3];
var expected = [2, 2, 3];
var result = maxValue(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 3, 1];
var expected = [3, 3, 3];
var result = maxValue(nums);
console.log(result, result.join() === expected.join());
