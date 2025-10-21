// 2248. Intersection of Multiple Arrays
// https://leetcode.com/problems/intersection-of-multiple-arrays/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  const result = [];
  const counts = new Array(1001).fill(0);
  for (const numArr of nums) {
    for (const num of numArr) {
      counts[num]++;
    }
  }
  for (let num = 0; num < counts.length; num++) {
    if (counts[num] === nums.length) {
      result.push(num);
    }
  }
  return result;
};

var nums = [
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
];
var expected = [3, 4];
var result = intersection(nums);
console.log(result, result.join() === expected.join());

var nums = [
  [1, 2, 3],
  [4, 5, 6],
];
var expected = [];
var result = intersection(nums);
console.log(result, result.join() === expected.join());

var nums = [
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6, 1],
];
var expected = [1, 3, 4];
var result = intersection(nums);
console.log(result, result.join() === expected.join());
