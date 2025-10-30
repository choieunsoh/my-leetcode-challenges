// 1925. Count Square Sum Triples
// https://leetcode.com/problems/count-square-sum-triples/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      const cSquare = a * a + b * b;
      const c = Math.sqrt(cSquare);
      if (Number.isInteger(c) && c <= n) {
        count += a === b ? 1 : 2;
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
