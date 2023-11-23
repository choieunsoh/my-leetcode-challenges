// 1762. Buildings With an Ocean View
// https://leetcode.com/problems/buildings-with-an-ocean-view/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  const result = [];
  const stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(i);
    }
    stack.push(i);
  }
  return result.reverse();
};

var heights = [4, 2, 3, 1];
var expected = [0, 2, 3];
var result = findBuildings(heights);
console.log(result, result.join() === expected.join());

var heights = [4, 3, 2, 1];
var expected = [0, 1, 2, 3];
var result = findBuildings(heights);
console.log(result, result.join() === expected.join());

var heights = [1, 3, 2, 4];
var expected = [3];
var result = findBuildings(heights);
console.log(result, result.join() === expected.join());

var heights = [2, 2, 2, 2];
var expected = [3];
var result = findBuildings(heights);
console.log(result, result.join() === expected.join());
