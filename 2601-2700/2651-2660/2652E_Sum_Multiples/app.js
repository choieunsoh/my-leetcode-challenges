// 2652. Sum Multiples
// https://leetcode.com/problems/sum-multiples/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      sum += num;
    }
  }
  return sum;
};

var n = 7;
var expected = 21;
var result = sumOfMultiples(n);
console.log(result, result === expected);

var n = 10;
var expected = 40;
var result = sumOfMultiples(n);
console.log(result, result === expected);

var n = 9;
var expected = 30;
var result = sumOfMultiples(n);
console.log(result, result === expected);
