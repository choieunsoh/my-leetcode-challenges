// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/
var generate = function (numRows: number): number[][] {
  const result: number[][] = [[1]];
  for (let n = 1; n < numRows; n++) {
    const prev = result[n - 1];
    const row: number[] = [1];
    for (let i = 1; i <= n - 1; i++) {
      row.push(prev[i - 1] + prev[i]);
    }
    row.push(1);
    result.push(row);
  }
  return result;
};

generate(5).forEach((rows) => console.log(rows));
generate(1).forEach((rows) => console.log(rows));

var numRows = 5;
var expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
var result = generate(numRows);
console.log(result, result.join() === expected.join());

var numRows = 1;
var expected = [[1]];
var result = generate(numRows);
console.log(result, result.join() === expected.join());
