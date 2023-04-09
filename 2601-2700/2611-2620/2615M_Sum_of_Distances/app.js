// 2615. Sum of Distances
// https://leetcode.com/problems/sum-of-distances/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const map = new Map();
  const leftSums = Array(n).fill(0);
  for (let index = 0; index < n; index++) {
    const num = nums[index];
    if (!map.has(num)) {
      map.set(num, [index, 1]);
    } else {
      const [prevIndex, count] = map.get(num);
      map.set(num, [index, count + 1]);
      const prevSum = leftSums[prevIndex];
      leftSums[index] = (index - prevIndex) * count + prevSum;
    }
  }

  map.clear();

  const rightSums = Array(n).fill(0);
  for (let index = n - 1; index >= 0; index--) {
    const num = nums[index];
    if (!map.has(num)) {
      map.set(num, [index, 1]);
    } else {
      const [prevIndex, count] = map.get(num);
      map.set(num, [index, count + 1]);
      const prevSum = rightSums[prevIndex];
      rightSums[index] = (prevIndex - index) * count + prevSum;
    }
  }

  const result = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    result[i] = leftSums[i] + rightSums[i];
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
