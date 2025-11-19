// 492. Construct the Rectangle
// https://leetcode.com/problems/construct-the-rectangle/
// T.C.: O(sqrt(n))
// S.C.: O(1)
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let width = Math.sqrt(area) | 0;
  while (area % width !== 0) {
    width--;
  }
  return [area / width, width];
};

var area = 4;
var expected = [2, 2];
var result = constructRectangle(area);
console.log(result, result.join() === expected.join());

var area = 37;
var expected = [37, 1];
var result = constructRectangle(area);
console.log(result, result.join() === expected.join());

var area = 122122;
var expected = [427, 286];
var result = constructRectangle(area);
console.log(result, result.join() === expected.join());
