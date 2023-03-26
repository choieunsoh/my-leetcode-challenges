// rotateImage
// LC-48: https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} a
 * @return {number[][]}
 */
function rotateImage(a) {
  const n = a.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      swap(i, j, j, n - 1 - i);
      swap(i, j, n - 1 - i, n - 1 - j);
      swap(i, j, n - 1 - j, i);
    }
  }
  return a;

  function swap(i, j, i2, j2) {
    [a[i][j], a[i2][j2]] = [a[i2][j2], a[i][j]];
  }
}

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var expected = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
var result = rotateImage(a);
console.log(result, result.join() === expected.join());
