// 3285. Find Indices of Stable Mountains
// https://leetcode.com/problems/find-indices-of-stable-mountains/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  const result = [];
  for (let i = 1; i < height.length; i++) {
    const prevMountainHeight = height[i - 1];
    if (prevMountainHeight > threshold) {
      result.push(i);
    }
  }
  return result;
};

var height = [1, 2, 3, 4, 5],
  threshold = 2;
var expected = [3, 4];
var result = stableMountains(height, threshold);
console.log(result, result.join() === expected.join());

var height = [10, 1, 10, 1, 10],
  threshold = 3;
var expected = [1, 3];
var result = stableMountains(height, threshold);
console.log(result, result.join() === expected.join());

var height = [10, 1, 10, 1, 10],
  threshold = 10;
var expected = [];
var result = stableMountains(height, threshold);
console.log(result, result.join() === expected.join());
