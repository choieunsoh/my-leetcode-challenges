// 2615. Sum of Distances
// https://leetcode.com/problems/sum-of-distances/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const counts = new Map();
  const sums = new Map();
  const n = nums.length;
  const result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (counts.has(num)) {
      result[i] += i * counts.get(num) - sums.get(num);
    }
    counts.set(num, (counts.get(num) ?? 0) + 1);
    sums.set(num, (sums.get(num) ?? 0) + i);
  }

  counts.clear();
  sums.clear();

  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];
    if (counts.has(num)) {
      result[i] += sums.get(num) - i * counts.get(num);
    }
    counts.set(num, (counts.get(num) ?? 0) + 1);
    sums.set(num, (sums.get(num) ?? 0) + i);
  }
  return result;
};

var nums = [2, 0, 2, 2, 6, 5, 2];
var expected = [11, 0, 7, 7, 0, 0, 13];
var result = distance(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 3, 1, 1, 2];
var expected = [5, 0, 3, 4, 0];
var result = distance(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 5, 3];
var expected = [0, 0, 0];
var result = distance(nums);
console.log(result, result.join() === expected.join());
