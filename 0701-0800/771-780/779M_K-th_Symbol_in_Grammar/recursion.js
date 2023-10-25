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

  const prevRow = n - 1;
  const halfNodes = (2 ** prevRow) >> 1;

  if (k > halfNodes) {
    return 1 - kthGrammar(prevRow, k - halfNodes);
  }
  return kthGrammar(prevRow, k);
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
