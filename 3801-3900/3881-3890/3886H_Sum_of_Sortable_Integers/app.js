// 3886. Sum of Sortable Integers
// https://leetcode.com/problems/sum-of-sortable-integers/description/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function (nums) {
  const n = nums.length;
  const fac = [];

  for (let x = 1; x * x <= n; x++) {
    if (n % x === 0) {
      fac.push(x);
      if (n / x !== x) {
        fac.push(n / x);
      }
    }
  }

  const target = [...nums].sort((a, b) => a - b);
  let result = 0;

  for (const d of fac) {
    let allGood = true;
    for (let left = 0; left < n; left += d) {
      const right = left + d - 1;

      if (!check(nums.slice(left, right + 1), target.slice(left, right + 1))) {
        allGood = false;
        break;
      }
    }
    if (allGood) {
      result += d;
    }
  }

  return result;

  // Check whether cyclic rotations of nums1 can produce nums2
  function check(nums1, nums2) {
    const L = nums1.length;

    for (let i = 0; i < L - 1; i++) {
      if (nums1[i] > nums1[i + 1]) {
        const rotated = [...nums1.slice(i + 1), ...nums1.slice(0, i + 1)];
        return rotated.every((val, idx) => val === nums2[idx]);
      }
    }

    return nums1.every((val, idx) => val === nums2[idx]);
  }
};

var nums = [3, 1, 2];
var expected = 3;
var result = sortableIntegers(nums);
console.log(result, result === expected);

var nums = [7, 6, 5];
var expected = 0;
var result = sortableIntegers(nums);
console.log(result, result === expected);

var nums = [5, 8];
var expected = 3;
var result = sortableIntegers(nums);
console.log(result, result === expected);
