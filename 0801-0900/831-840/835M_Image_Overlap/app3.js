// 835. Image Overlap
// https://leetcode.com/problems/image-overlap/description/
// T.C.: O(n^4)
// S.C.: O(n^2)
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const img1Ones = nonZeroCells(img1);
  const img2Ones = nonZeroCells(img2);

  let maxOverlaps = 0;
  const groupCount = new Map();

  for (const a of img1Ones) {
    for (const b of img2Ones) {
      const key = [b[0] - a[0], b[1] - a[1]].join();
      if (groupCount.has(key)) {
        groupCount.set(key, groupCount.get(key) + 1);
      } else {
        groupCount.set(key, 1);
      }
      maxOverlaps = Math.max(maxOverlaps, groupCount.get(key));
    }
  }
  return maxOverlaps;

  function nonZeroCells(M) {
    const ret = [];
    for (let row = 0; row < M.length; row++) {
      for (let col = 0; col < M.length; col++) {
        if (M[row][col] === 1) ret.push([row, col]);
      }
    }
    return ret;
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
