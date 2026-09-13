// 835. Image Overlap
// https://leetcode.com/problems/image-overlap/description/
// T.C.: O(n^4)
// S.C.: O(1)
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  let maxOverlaps = 0;
  for (let yShift = 0; yShift < img1.length; yShift++) {
    for (let xShift = 0; xShift < img1.length; xShift++) {
      // move the matrix img1 to the up-right and up-left directions.
      maxOverlaps = Math.max(maxOverlaps, shiftAndCount(xShift, yShift, img1, img2));
      // move the matrix img2 to the up-right and up-left directions, which is equivalent to moving img1 to the down-right and down-left directions
      maxOverlaps = Math.max(maxOverlaps, shiftAndCount(xShift, yShift, img2, img1));
    }
  }
  return maxOverlaps;

  /**
   *  Shift the matrix M in up-left and up-right directions
   *    and count the ones in the overlapping zone.
   */
  function shiftAndCount(xShift, yShift, M, R) {
    let leftShiftCount = 0;
    let rightShiftCount = 0;
    let rRow = 0;
    // count the cells of ones in the overlapping zone.
    for (let mRow = yShift; mRow < M.length; mRow++) {
      let rCol = 0;
      for (let mCol = xShift; mCol < M.length; mCol++) {
        if (M[mRow][mCol] === 1 && M[mRow][mCol] === R[rRow][rCol]) {
          leftShiftCount += 1;
        }
        if (M[mRow][rCol] === 1 && M[mRow][rCol] === R[rRow][mCol]) {
          rightShiftCount++;
        }
        rCol++;
      }
      rRow++;
    }
    return Math.max(leftShiftCount, rightShiftCount);
  }
};

var img1 = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  img2 = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 1],
  ];
var expected = 3;
var result = largestOverlap(img1, img2);
console.log(result, result === expected);

var img1 = [[1]],
  img2 = [[1]];
var expected = 1;
var result = largestOverlap(img1, img2);
console.log(result, result === expected);

var img1 = [[0]],
  img2 = [[0]];
var expected = 0;
var result = largestOverlap(img1, img2);
console.log(result, result === expected);
