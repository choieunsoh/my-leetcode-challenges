// 3318. Find X-Sum of All K-Long Subarrays I
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/
// T.C.: O(k*n^2 log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const n = nums.length;
  const result = [];
  for (let start = 0; start + k <= n; start++) {
    const counts = new Array(51).fill(0);
    let windowSum = 0;
    for (let i = start; i < start + k; i++) {
      counts[nums[i]]++;
      windowSum += nums[i];
    }

    const freqList = [];
    for (let val = 1; val <= 50; val++) {
      if (counts[val] > 0) {
        freqList.push([counts[val], val]);
      }
    }

    if (freqList.length <= x) {
      result.push(windowSum);
    } else {
      freqList.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
      let xSum = 0;
      for (let i = 0; i < x; i++) {
        xSum += freqList[i][0] * freqList[i][1];
      }
      result.push(xSum);
    }
  }
  return result;
};

var nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2;
var expected = [6, 10, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());

var nums = [3, 8, 7, 8, 7, 5],
  k = 2,
  x = 2;
var expected = [11, 15, 15, 15, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2;
var expected = [6, 10, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());
