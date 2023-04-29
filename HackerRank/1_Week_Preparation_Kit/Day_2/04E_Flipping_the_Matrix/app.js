function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length;
  const q = n / 2;
  let total = 0;
  for (let i = 0; i < q; i++) {
    for (let j = 0; j < q; j++) {
      total += Math.max(matrix[i][j], matrix[i][n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j - 1]);
    }
  }
  return total;
}

var matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
var expected = 414;
var result = flippingMatrix(matrix);
console.log(result, result === expected);
