// 1925. Count Square Sum Triples
// https://leetcode.com/problems/count-square-sum-triples/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let count = 0;
  const square = new Set();
  for (let c = 1; c <= n; c++) {
    square.add(c * c);
  }
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cc = a * a + b * b;
      if (square.has(cc)) {
        count++;
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
