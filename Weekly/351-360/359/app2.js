/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  const sum = ((n + 1) * n) / 2;
  if (sum < k) return sum;

  const nums = new Set();
  for (let i = 1; i < k; i++) {
    if (i !== k - i) {
      nums.add(Math.max(i, k - i));
    }
  }

  const result = [];
  for (let i = 1; i <= 200; i++) {
    if (nums.has(i)) continue;
    result.push(i);
    if (result.length === n) break;
  }

  return result.reduce((sum, num) => sum + num, 0);
};

var n = 5,
  k = 4;
var expected = 18;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 5, // 9 10 11 12 13
  k = 9;
var expected = 19;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 2,
  k = 6;
var expected = 3;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 6,
  k = 22;
var expected = 21;
var result = minimumSum(n, k);
console.log(result, result === expected);

var n = 27,
  k = 49;
var expected = 450;
var result = minimumSum(n, k);
console.log(result, result === expected);
