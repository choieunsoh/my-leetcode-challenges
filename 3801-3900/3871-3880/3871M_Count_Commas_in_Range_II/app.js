// 3871. Count Commas in Range II
// https://leetcode.com/problems/count-commas-in-range-ii/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
  let p = 1000;
  let count = 0;
  while (p <= n) {
    count += n - p + 1;
    p *= 1000;
  }
  return count;
};

var n = 1002;
var expected = 3;
var result = countCommas(n);
console.log(result, result === expected);

var n = 998;
var expected = 0;
var result = countCommas(n);
console.log(result, result === expected);

var n = 9999;
var expected = 9000;
var result = countCommas(n);
console.log(result, result === expected);

var n = 10000;
var expected = 9001;
var result = countCommas(n);
console.log(result, result === expected);

var n = 1e12;
var expected = 2998998999004;
var result = countCommas(n);
console.log(result, result === expected);

var n = 1e15;
var expected = 3998998998999005;
var result = countCommas(n);
console.log(result, result === expected);
