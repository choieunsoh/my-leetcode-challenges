// 1944. Number of Visible People in a Queue
// https://leetcode.com/problems/number-of-visible-people-in-a-queue/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const n = heights.length;
  const stack = [];
  const result = new Uint32Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const height = heights[i];
    while (stack.length && heights[stack[stack.length - 1]] <= height) {
      result[stack.pop()]++;
    }
    if (stack.length) {
      result[stack[stack.length - 1]]++;
    }
    stack.push(i);
  }
  return result;
};

var heights = [10, 6, 8, 5, 11, 9];
var expected = [3, 1, 2, 1, 1, 0];
var result = canSeePersonsCount(heights);
console.log(result, result.join() === expected.join());

var heights = [5, 1, 2, 3, 10];
var expected = [4, 1, 1, 1, 0];
var result = canSeePersonsCount(heights);
console.log(result, result.join() === expected.join());
