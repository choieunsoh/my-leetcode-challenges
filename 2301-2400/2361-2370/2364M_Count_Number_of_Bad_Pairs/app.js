// 2364. Count Number of Bad Pairs
// https://leetcode.com/problems/count-number-of-bad-pairs/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  const map = new Map();
  const n = nums.length;
  const totalPairs = (n * (n - 1)) / 2;
  let goodPairs = 0;
  for (let i = 0; i < n; i++) {
    const diff = nums[i] - i;
    if (map.has(diff)) {
      goodPairs += map.get(diff);
    }
    map.set(diff, (map.get(diff) ?? 0) + 1);
  }
  return totalPairs - goodPairs;
};

var nums = [4, 1, 3, 3];
var expected = 5;
var result = countBadPairs(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 0;
var result = countBadPairs(nums);
console.log(result, result === expected);
