// 2657. Find the Prefix Common Array of Two Arrays
// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;
  const prefixCommonArray = new Array(n).fill(0);

  // Initialize sets to store elements from A and B
  const elementsInA = new Set();
  const elementsInB = new Set();

  // Iterate through the elements of both arrays
  for (let currentIndex = 0; currentIndex < n; ++currentIndex) {
    // Add current elements from A and B to respective sets
    elementsInA.add(A[currentIndex]);
    elementsInB.add(B[currentIndex]);

    let commonCount = 0;

    // Count common elements between the sets
    for (let element of elementsInA) {
      if (elementsInB.has(element)) {
        commonCount++;
      }
    }

    // Store the count of common elements for the current prefix
    prefixCommonArray[currentIndex] = commonCount;
  }

  // Return the final array with counts of common elements in each prefix
  return prefixCommonArray;
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
