// 2615. Sum of Distances
// https://leetcode.com/problems/sum-of-distances/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    if (!groups.has(nums[i])) {
      groups.set(nums[i], []);
    }
    groups.get(nums[i]).push(i);
  }
  const result = new Array(n).fill(0);
  for (const group of groups.values()) {
    let total = 0;
    for (const idx of group) {
      total += idx;
    }
    let prefixTotal = 0;
    const sz = group.length;
    for (let i = 0; i < sz; i++) {
      const idx = group[i];
      result[idx] = total - prefixTotal * 2 + idx * (2 * i - sz);
      prefixTotal += idx;
    }
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
