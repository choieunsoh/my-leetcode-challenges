// 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  const n = nums.length;
  if (n <= 4) return 0;

  if (n <= 8) {
    nums.sort((a, b) => a - b);
    const x = n - 4;
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
      result = Math.min(result, nums[i + x] - nums[i]);
    }
    return result;
  }

  const [s1, s2, s3, s4] = smallest(nums);
  const [l1, l2, l3, l4] = largest(nums);
  return Math.min(l1 - s4, l2 - s3, l3 - s2, l4 - s1);

  function smallest(nums) {
    const MAX = Number.MAX_SAFE_INTEGER;
    let [s1, s2, s3, s4] = [MAX, MAX, MAX, MAX];
    for (const num of nums) {
      if (num < s1) {
        s4 = s3;
        s3 = s2;
        s2 = s1;
        s1 = num;
      } else if (num < s2) {
        s4 = s3;
        s3 = s2;
        s2 = num;
      } else if (num < s3) {
        s4 = s3;
        s3 = num;
      } else if (num < s4) {
        s4 = num;
      }
    }
    return [s1, s2, s3, s4];
  }

  function largest(nums) {
    const MIN = Number.MIN_SAFE_INTEGER;
    let [l1, l2, l3, l4] = [MIN, MIN, MIN, MIN];
    for (const num of nums) {
      if (num > l1) {
        l4 = l3;
        l3 = l2;
        l2 = l1;
        l1 = num;
      } else if (num > l2) {
        l4 = l3;
        l3 = l2;
        l2 = num;
      } else if (num > l3) {
        l4 = l3;
        l3 = num;
      } else if (num > l4) {
        l4 = num;
      }
    }
    return [l1, l2, l3, l4];
  }
};

var nums = [5, 3, 2, 4];
var expected = 0;
var result = minDifference(nums);
console.log(result, result === expected);

var nums = [1, 5, 0, 10, 14];
var expected = 1;
var result = minDifference(nums);
console.log(result, result === expected);

var nums = [3, 100, 20];
var expected = 0;
var result = minDifference(nums);
console.log(result, result === expected);

var nums = [3, 10, 100, 20, 40, 200, 700];
var expected = 37;
var result = minDifference(nums);
console.log(result, result === expected);

var nums = [3, 10, 100, 20, 40, 200, 700, 800, 1000, 2000];
var expected = 697;
var result = minDifference(nums);
console.log(result, result === expected);
