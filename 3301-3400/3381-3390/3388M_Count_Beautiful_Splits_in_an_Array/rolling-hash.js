// 3388. Count Beautiful Splits in an Array
// https://leetcode.com/problems/count-beautiful-splits-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSplits = function (nums) {
  const n = nums.length;
  if (n < 3) return 0;

  const mod = 1_000_000_007;
  const base = 31;

  // Compute prefix hashes
  const prefixHash = new Array(n + 1).fill(0);
  const pow = new Array(n + 1).fill(1);

  for (let i = 0; i < n; i++) {
    pow[i + 1] = (pow[i] * base) % mod;
    prefixHash[i + 1] = (prefixHash[i] * base + nums[i]) % mod;
  }

  let count = 0;

  // Iterate over possible i and j such that 1 <= i < j < n
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let valid = false;

      // Check if nums1 is a prefix of nums2
      if (isPrefix(prefixHash, 0, i, i, j, mod, pow)) {
        valid = true;
      }

      // Check if nums2 is a prefix of nums3
      if (!valid && isPrefix(prefixHash, i, j, j, n, mod, pow)) {
        valid = true;
      }

      if (valid) {
        count++;
      }
    }
  }

  return count;

  // Helper function to compare hashes of two subarrays
  function isPrefix(hash, start1, end1, start2, end2, mod, pow) {
    const len1 = end1 - start1;
    const len2 = end2 - start2;

    if (len1 > len2) {
      return false;
    }

    const hash1 = (hash[end1] - ((hash[start1] * pow[len1]) % mod) + mod) % mod;
    const hash2 = (hash[start2 + len1] - ((hash[start2] * pow[len1]) % mod) + mod) % mod;

    return hash1 === hash2;
  }
};

var nums = [1, 1, 2, 1];
var expected = 2;
var result = beautifulSplits(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 0;
var result = beautifulSplits(nums);
console.log(result, result === expected);

var nums = [1, 2, 0, 1, 2, 1, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 1];
var expected = 10;
var result = beautifulSplits(nums);
console.log(result, result === expected);
