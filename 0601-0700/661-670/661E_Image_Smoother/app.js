// https://leetcode.com/problems/image-smoother/
// 661. Image Smoother
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const result = [];
  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      let count = 0;
      let sum = 0;
      for (let a = i - 1; a <= i + 1; a++) {
        for (let b = j - 1; b <= j + 1; b++) {
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
console.log(result.join() === expected.join());

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
console.log(result.join() === expected.join());
