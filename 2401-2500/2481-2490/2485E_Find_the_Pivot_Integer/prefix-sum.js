// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const sumOfN = ((n + 1) * n) / 2;
  let leftSum = 0;
  for (let num = 1; num <= n; num++) {
    leftSum += num;
    if (leftSum === sumOfN - leftSum + num) return num;
  }
  return -1;
};

var n = 8;
var expected = 6;
var result = pivotInteger(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = pivotInteger(n);
console.log(result, result === expected);

var n = 4;
var expected = -1;
var result = pivotInteger(n);
console.log(result, result === expected);

var n = 2;
var expected = -1;
var result = pivotInteger(n);
console.log(result, result === expected);

for (let n = 1; n <= 1000; n++) {
  var result = pivotInteger(n);
  if (result === -1) continue;
  console.log(n, ((n + 1) * n) / 2, result);
}
