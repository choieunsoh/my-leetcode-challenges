// 1481. Least Number of Unique Integers after K Removals
// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/
// T.C.: O(N log N)
// S.C.: O(N)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const counts = new Map();
  for (const num of arr) {
    const count = counts.get(num) ?? 0;
    counts.set(num, count + 1);
  }

  const nums = [...counts.values()].sort((a, b) => a - b);
  let remain = k;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const count = nums[i];
    remain -= count;
    if (remain < 0) {
      return n - i;
    }
    if (remain === 0) {
      return n - i - 1;
    }
  }
  return 0;
};

var arr = [5, 5, 4],
  k = 1;
var expected = 1;
var result = findLeastNumOfUniqueInts(arr, k);
console.log(result, result === expected);

var arr = [4, 3, 1, 1, 3, 3, 2],
  k = 3;
var expected = 2;
var result = findLeastNumOfUniqueInts(arr, k);
console.log(result, result === expected);
