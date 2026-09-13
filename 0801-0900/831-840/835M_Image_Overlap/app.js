// 835. Image Overlap
// https://leetcode.com/problems/image-overlap/description/
// T.C.: O(n^4)
// S.C.: O(n^2)
// Imagine Convolution
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const N = img1.length;
  const img2Padded = Array.from({ length: 3 * N - 2 }, () => new Array(3 * N - 2).fill(0));
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      img2Padded[row + N - 1][col + N - 1] = img2[row][col];
    }
  }

  let maxOverlaps = 0;
  for (let xShift = 0; xShift < 2 * N - 1; xShift++) {
    for (let yShift = 0; yShift < 2 * N - 1; yShift++) {
      maxOverlaps = Math.max(maxOverlaps, convolute(img1, img2Padded, xShift, yShift));
    }
  }
  return maxOverlaps;

  function convolute(A, kernel, xShift, yShift) {
    let result = 0;
    for (let row = 0; row < A.length; ++row) {
      for (let col = 0; col < A.length; ++col) {
        result += A[row][col] * kernel[row + yShift][col + xShift];
      }
    }
    return result;
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
