// 661. Image Smoother
// https://leetcode.com/problems/image-smoother/
// T.C.: O(m * n)
// T.C.: O(m * n)
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const prefixSum = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        prefixSum[i][j] = img[i][j];
      } else if (i === 0) {
        prefixSum[i][j] = prefixSum[i][j - 1] + img[i][j];
      } else if (j === 0) {
        prefixSum[i][j] = prefixSum[i - 1][j] + img[i][j];
      } else {
        prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] + img[i][j] - prefixSum[i - 1][j - 1];
      }
    }
  }
  prefixSum.map((line) => console.log(line));

  const result = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    const i1 = Math.max(i - 1, 0);
    const i2 = Math.min(i + 1, m - 1);
    for (let j = 0; j < n; j++) {
      const j1 = Math.max(j - 1, 0);
      const j2 = Math.min(j + 1, n - 1);
      result[i][j] = getRangeSum(prefixSum, i1, j1, i2, j2);
      result[i][j] /= (i2 - i1 + 1) * (j2 - j1 + 1);
      result[i][j] >>= 0;
    }
  }
  return result;

  function getRangeSum(prefixSum, rowStart, colStart, rowEnd, colEnd) {
    let rangeSum = prefixSum[rowEnd][colEnd];
    if (rowStart > 0) rangeSum = rangeSum - prefixSum[rowStart - 1][colEnd];
    if (colStart > 0) rangeSum = rangeSum - prefixSum[rowEnd][colStart - 1];
    if (rowStart > 0 && colStart > 0) rangeSum = rangeSum + prefixSum[rowStart - 1][colStart - 1];
    return rangeSum;
  }
};

var img = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
var expected = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var result = imageSmoother(img);
console.log(result, result.join() === expected.join());

var img = [
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
];
var expected = [
  [137, 141, 137],
  [141, 138, 141],
  [137, 141, 137],
];
var result = imageSmoother(img);
console.log(result, result.join() === expected.join());
