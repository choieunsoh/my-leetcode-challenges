// 1504. Count Submatrices With All Ones
// https://leetcode.com/problems/count-submatrices-with-all-ones/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const cols = mat[0].length;
  const heights = new Array(cols).fill(0);
  let count = 0;
  for (const rows of mat) {
    for (let col = 0; col < cols; col++) {
      heights[col] = rows[col] === 0 ? 0 : heights[col] + 1;
    }

    const stack = [[-1, 0, -1]]; // [prev, curr, height]
    for (let col = 0; col < cols; col++) {
      const height = heights[col];
      while (stack[stack.length - 1][2] >= height) {
        stack.pop();
      }
      const [j, prev] = stack[stack.length - 1];
      const cur = prev + (col - j) * height;
      stack.push([col, cur, height]);
      count += cur;
    }
  }

  return count;
};

var mat = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
var expected = 13;
var result = numSubmat(mat);
console.log(result, result === expected);

var mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
];
var expected = 24;
var result = numSubmat(mat);
console.log(result, result === expected);
