// 3583. Count Special Triplets
// https://leetcode.com/problems/count-special-triplets/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const MOD = 1e9 + 7;
  const indices = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (indices.has(num)) {
      indices.get(num).push(i);
    } else {
      indices.set(num, [i]);
    }
  }

  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    const targetIndices = indices.get(nums[i] * 2);
    if (targetIndices && targetIndices.length > 1 && targetIndices[0] < i) {
      let [left, right] = upperBound(targetIndices, i);
      if (nums[i] === 0) {
        left--;
      }
      count += (left * right) % MOD;
      count %= MOD;
    }
  }
  return count;

  function upperBound(arr, i) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = left + ((right - left + 1) >> 1);
      if (i >= arr[mid]) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return [left + 1, arr.length - 1 - left];
  }
};

var nums = [6, 3, 6];
var expected = 1;
var result = specialTriplets(nums);
console.log(result, result === expected);

var nums = [0, 1, 0, 0];
var expected = 1;
var result = specialTriplets(nums);
console.log(result, result === expected);

var nums = [8, 4, 2, 8, 4];
var expected = 2;
var result = specialTriplets(nums);
console.log(result, result === expected);
