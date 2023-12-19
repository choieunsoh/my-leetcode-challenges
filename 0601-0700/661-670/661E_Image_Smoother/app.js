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
  const result = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    const i1 = Math.max(i - 1, 0);
    const i2 = Math.min(i + 1, m - 1);
    for (let j = 0; j < n; j++) {
      let count = 0;
      let sum = 0;
      const j1 = Math.max(j - 1, 0);
      const j2 = Math.min(j + 1, n - 1);
      for (let a = i1; a <= i2; a++) {
        for (let b = j1; b <= j2; b++) {
          if (a >= 0 && a < m && b >= 0 && b < n) {
            sum += img[a][b];
            count++;
          }
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
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
