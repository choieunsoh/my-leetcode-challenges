// 3404. Count Special Subsequences
// https://leetcode.com/problems/count-special-subsequences/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function (nums) {
  // nums[p] / nums[q] === nums[r] / nums[s] (much easier to find)
  const n = nums.length;
  const ratio = new Map();
  for (let i = 0; i < n - 6; i++) {
    for (let j = i + 2; j < n - 4; j++) {
      const num = nums[i];
      const den = nums[j];
      const c = num / den;
      if (!ratio.has(c)) {
        ratio.set(c, []);
      }
      ratio.get(c).push(j);
    }
  }

  for (const [, list] of ratio) {
    list.sort((a, b) => a - b);
  }

  // r must start at the minimum of index 4
  let result = 0;
  for (let i = 4; i < n - 2; i++) {
    for (let j = i + 2; j < n; j++) {
      // numerator and denominator flipped from earlier order
      const num = nums[j];
      const den = nums[i];
      const c = num / den;
      if (!ratio.has(c)) {
        continue;
      }

      const curr = ratio.get(c);
      let left = 0;
      let right = curr.length - 1;
      // binary search to find the largest number that is at least 2 less than the current index (i-2)>=(max)
      let best = -1;
      while (left <= right) {
        const mid = (left + right) >> 1;
        const diff = i - curr[mid];
        if (diff >= 2) {
          // diff is good, but try to move right
          left = mid + 1;
          best = Math.max(best, mid);
        } else {
          // diff is too small, move left
          right = mid - 1;
        }
      }
      result += best + 1;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 3, 6, 1];
var expected = 1;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);

var nums = [3, 4, 3, 4, 3, 4, 3, 4];
var expected = 3;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);
