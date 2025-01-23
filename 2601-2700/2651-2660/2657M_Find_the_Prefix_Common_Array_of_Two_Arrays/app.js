// 2657. Find the Prefix Common Array of Two Arrays
// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const result = new Array(n).fill(0);
  const counts = new Array(n + 1).fill(0);
  let commonCount = 0;
  for (let i = 0; i < n; ++i) {
    if (++counts[A[i]] === 2) commonCount++;
    if (++counts[B[i]] === 2) commonCount++;
    result[i] = commonCount;
  }
  return result;
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
