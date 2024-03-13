// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/
// T.C.: O(log n)
// S.C.: O(1)
var pivotInteger = function (n: number): number {
  const sumOfN = ((n + 1) * n) / 2;
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (mid * mid < sumOfN) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left * left === sumOfN) return left;
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
