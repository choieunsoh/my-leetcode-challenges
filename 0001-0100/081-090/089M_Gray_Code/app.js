// 89. Gray Code
// https://leetcode.com/problems/gray-code/
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const codeCount = 1 << n;
  const result = [];
  for (let i = 0; i < codeCount; i++) {
    code = i ^ (i >> 1);
    result.push(code);
  }
  return result;
};

var n = 2;
var expected = [0, 1, 3, 2];
var result = grayCode(n);
console.log(result, result.join() === expected.join());

var n = 1;
var expected = [0, 1];
var result = grayCode(n);
console.log(result, result.join() === expected.join());
