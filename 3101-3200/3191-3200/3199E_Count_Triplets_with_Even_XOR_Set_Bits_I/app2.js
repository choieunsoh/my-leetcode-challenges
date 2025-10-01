// 3199. Count Triplets with Even XOR Set Bits I
// https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function (a, b, c) {
  let count = 0;
  const [evenA, oddA] = countParity(a);
  const [evenB, oddB] = countParity(b);
  const [evenC, oddC] = countParity(c);
  count += evenA * evenB * evenC;
  count += evenA * oddB * oddC;
  count += oddA * evenB * oddC;
  count += oddA * oddB * evenC;
  return count;

  function countParity(arr) {
    let even = 0;
    let odd = 0;
    for (const x of arr) {
      let n = x;
      let bits = 0;
      while (n) {
        n &= n - 1;
        bits++;
      }
      if (bits % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
    return [even, odd];
  }
};

var a = [1],
  b = [2],
  c = [3];
var expected = 1;
var result = tripletCount(a, b, c);
console.log(result, result === expected);

var a = [1, 1],
  b = [2, 3],
  c = [1, 5];
var expected = 4;
var result = tripletCount(a, b, c);
console.log(result, result === expected);
