// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];

  if (numRows === 1) return result;

  for (let i = 1; i < numRows; i++) {
    const prevRow = result[result.length - 1];
    const row = [1]; // first

    for (let j = 0; j < prevRow.length - 1; j++) {
      const sum = prevRow[j] + prevRow[j + 1];
      row.push(sum);
    }

    row.push(1); // last
    result.push(row);
  }

  return result;
};

generate(5).forEach((rows) => console.log(rows));
generate(1).forEach((rows) => console.log(rows));
