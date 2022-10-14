// 2022. Convert 1D Array Into 2D Array
// https://leetcode.com/problems/convert-1d-array-into-2d-array/
function construct2DArray_Loop(original: number[], m: number, n: number) {
  if (original.length !== m * n) return [];
  const matrix: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n));
  for (let index = 0; index < original.length; index++) {
    const row = Math.floor(index / n);
    const column = index % n;
    matrix[row][column] = original[index];
  }
  return matrix;
}

var original = [1, 2, 3, 4],
  m = 2,
  n = 2;
var expected = [
  [1, 2],
  [3, 4],
];
var result = construct2DArray_Loop(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 2, 3],
  m = 1,
  n = 3;
var expected = [[1, 2, 3]];
var result = construct2DArray_Loop(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 2],
  m = 1,
  n = 1;
var expected: number[][] = [[]];
var result = construct2DArray_Loop(original, m, n);
console.log(result, result.join() === expected.join());

var original = [1, 1, 1, 1],
  m = 4,
  n = 1;
var expected = [[1], [1], [1], [1]];
var result = construct2DArray_Loop(original, m, n);
console.log(result, result.join() === expected.join());
