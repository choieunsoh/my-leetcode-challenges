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

  function kmp(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const pi = new Array(m).fill(0);
    let j = 0;

    for (let i = 1; i < m; i++) {
      while (j > 0 && nums2[i] !== nums2[j]) {
        j = pi[j - 1];
      }
      if (nums2[i] === nums2[j]) {
        j++;
      }
      pi[i] = j;
    }

    j = 0;
    for (let i = 0; i < n; i++) {
      while (j > 0 && nums1[i] !== nums2[j]) {
        j = pi[j - 1];
      }
      if (nums1[i] === nums2[j]) {
        j++;
      }
      if (j === m) {
        return true;
      }
    }
    return false;
  }

  function check(nums1, nums2) {
    // Check whether cyclic rotations of nums1 can produce nums2
    return kmp([...nums1, ...nums1], nums2);
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
