// 3394. Check if Grid can be Cut into Sections
// https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  return checkCuts(0) || checkCuts(1);

  function checkCuts(dim) {
    rectangles.sort((a, b) => a[dim] - b[dim] || b[dim + 2] - a[dim + 2]);

    let sections = 0;
    let maxEnd = rectangles[0][dim + 2];
    for (let i = 1; i < rectangles.length; i++) {
      const [start, end] = [rectangles[i][dim], rectangles[i][dim + 2]];
      if (start >= maxEnd && ++sections === 2) {
        return true;
      }
      if (sections > 2) {
        return false;
      }
      maxEnd = Math.max(maxEnd, end);
    }
    return false;
  }
};

var n = 5,
  rectangles = [
    [1, 0, 5, 2],
    [0, 2, 2, 4],
    [3, 2, 5, 3],
    [0, 4, 4, 5],
  ];
var expected = true;
var result = checkValidCuts(n, rectangles);
console.log(result, result === expected);

var n = 4,
  rectangles = [
    [0, 0, 1, 1],
    [2, 0, 3, 4],
    [0, 2, 2, 3],
    [3, 0, 4, 3],
  ];
var expected = true;
var result = checkValidCuts(n, rectangles);
console.log(result, result === expected);

var n = 4,
  rectangles = [
    [0, 2, 2, 4],
    [1, 0, 3, 2],
    [2, 2, 3, 4],
    [3, 0, 4, 2],
    [3, 2, 4, 4],
  ];
var expected = false;
var result = checkValidCuts(n, rectangles);
console.log(result, result === expected);
