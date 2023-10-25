// 779. K-th Symbol in Grammar
// https://leetcode.com/problems/k-th-symbol-in-grammar/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;
  let symbol = 1;
  for (let prevRow = n - 1; prevRow > 0; prevRow--) {
    const half = (2 ** prevRow) >> 1;
    if (k > half) {
      symbol ^= 1;
      k -= half;
    }
  }
  return symbol ^ 1;
};

var n = 1,
  k = 1,
  expected = 0;
var result = kthGrammar(n, k);
console.log(result, result === expected);

var n = 2,
  k = 1,
  expected = 0;
var result = kthGrammar(n, k);
console.log(result, result === expected);

var n = 2,
  k = 2,
  expected = 1;
var result = kthGrammar(n, k);
console.log(result, result === expected);

var n = 30,
  k = 434991989,
  expected = 0;
var result = kthGrammar(n, k);
console.log(result, result === expected);
