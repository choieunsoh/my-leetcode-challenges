// 779. K-th Symbol in Grammar
// https://leetcode.com/problems/k-th-symbol-in-grammar/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;
  const kParent = Math.ceil(k / 2);
  const prevRow = n - 1;
  const prevValue = kthGrammar(prevRow, kParent);
  if (k % 2 === 1) return prevValue;
  return prevValue ? 0 : 1;
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
