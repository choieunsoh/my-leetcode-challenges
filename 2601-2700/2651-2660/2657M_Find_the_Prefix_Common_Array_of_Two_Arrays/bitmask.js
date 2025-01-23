// 2657. Find the Prefix Common Array of Two Arrays
// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const result = new Array(n).fill(0);
  let maskA = 0n;
  let maskB = 0n;
  for (let i = 0; i < n; i++) {
    maskA |= 1n << BigInt(A[i]);
    maskB |= 1n << BigInt(B[i]);
    result[i] = bitCount(maskA & maskB);
  }
  return result;

  function bitCount(n) {
    const lo = Number(n & 0xffffffffffffffffn);
    const hi = Number(n >> 64n);
    return count1s64(lo) + count1s64(hi);
  }

  function count1s64(n) {
    n = BigInt(n);
    n = n - ((n >> 1n) & 0x5555555555555555n);
    n = (n & 0x3333333333333333n) + ((n >> 2n) & 0x3333333333333333n);
    n = (n + (n >> 4n)) & 0x0f0f0f0f0f0f0f0fn;
    n = n + (n >> 8n);
    n = n + (n >> 16n);
    n = n + (n >> 32n);
    return Number(n & 0x7fn);
  }
};

var A = [1, 3, 2, 4],
  B = [3, 1, 2, 4];
var expected = [0, 2, 3, 4];
var result = findThePrefixCommonArray(A, B);
console.log(result, result.join() === expected.join());

var A = [2, 3, 1],
  B = [3, 1, 2];
var expected = [0, 1, 3];
var result = findThePrefixCommonArray(A, B);
console.log(result, result.join() === expected.join());

var A = [4, 6, 7, 3, 5, 1, 2, 8],
  B = [8, 5, 2, 1, 6, 3, 7, 4];
var expected = [0, 0, 0, 0, 2, 4, 6, 8];
var result = findThePrefixCommonArray(A, B);
console.log(result, result.join() === expected.join());
