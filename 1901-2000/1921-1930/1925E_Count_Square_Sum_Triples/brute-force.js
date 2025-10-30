// 1925. Count Square Sum Triples
// https://leetcode.com/problems/count-square-sum-triples/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        if (a * a + b * b === c * c) {
          count++;
        }
      }
    }
  }
  return count;
};

var n = 5;
var expected = 2;
var result = countTriples(n);
console.log(result, result === expected);

var n = 10;
var expected = 4;
var result = countTriples(n);
console.log(result, result === expected);
