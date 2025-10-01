// 3199. Count Triplets with Even XOR Set Bits I
// https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/description/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function (a, b, c) {
  let count = 0;
  for (const i of a) {
    for (const j of b) {
      for (const k of c) {
        const xor = i ^ j ^ k;
        const bits = count1Bit(xor);
        if (bits % 2 === 0) count++;
      }
    }
  }
  return count;

  function count1Bit(n) {
    let bits = 0;
    while (n) {
      n &= n - 1;
      bits++;
    }
    return bits;
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
