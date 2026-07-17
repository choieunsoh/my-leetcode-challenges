// 3312. Sorted GCD Pair Queries
// https://leetcode.com/problems/sorted-gcd-pair-queries/description/
// T.C.: O(m log m + q log m)
// S.C.: O(m)
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function (nums, queries) {
  const m = Math.max(...nums);
  const cnt = new Array(m + 1).fill(0);
  for (const num of nums) {
    cnt[num]++;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = i * 2; j <= m; j += i) {
      cnt[i] += cnt[j];
    }
  }
  for (let i = 1; i <= m; i++) {
    cnt[i] = Math.floor((cnt[i] * (cnt[i] - 1)) / 2);
  }
  for (let i = m; i >= 1; i--) {
    for (let j = i * 2; j <= m; j += i) {
      cnt[i] -= cnt[j];
    }
  }
  for (let i = 1; i <= m; i++) {
    cnt[i] += cnt[i - 1];
  }
  const result = [];
  for (let q of queries) {
    q++;
    let left = 1;
    let right = m;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (cnt[mid] >= q) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    result.push(left);
  }
  return result;
};

var nums = [2, 3, 4],
  queries = [0, 2, 2];
var expected = [1, 2, 2];
var result = gcdValues(nums, queries);
console.log(result, result.toString() === expected.toString());

var nums = [4, 4, 2, 1],
  queries = [5, 3, 1, 0];
var expected = [4, 2, 1, 1];
var result = gcdValues(nums, queries);
console.log(result, result.toString() === expected.toString());

var nums = [2, 2],
  queries = [0, 0];
var expected = [2, 2];
var result = gcdValues(nums, queries);
console.log(result, result.toString() === expected.toString());
