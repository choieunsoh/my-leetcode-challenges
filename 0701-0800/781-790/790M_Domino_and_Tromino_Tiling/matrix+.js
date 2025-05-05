// 790. Domino and Tromino Tiling
// https://leetcode.com/problems/domino-and-tromino-tiling/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // Use BigInt for MOD to ensure correct modulo operations with large numbers
  const MOD = 1_000_000_007n;
  const SIZE = 3; // Width/Length of the square matrix.

  // Initialize the square matrix. Elements can be Numbers initially,
  // but will be treated as BigInts during calculations.
  const SQ_MATRIX = [
    [1, 1, 2],
    [1, 0, 0],
    [0, 1, 1],
  ];

  // Cache for memoization (Map<number, number[][]>)
  const cache = new Map();

  /** Return product of 2 square matrices. */
  function matrixProduct(m1, m2) {
    // Result matrix `ans` will also be a 3x3 square matrix.
    const ans = Array(SIZE)
      .fill(0)
      .map(() => Array(SIZE).fill(0));
    for (let row = 0; row < SIZE; ++row) {
      for (let col = 0; col < SIZE; ++col) {
        let sum = 0n; // Use BigInt for the sum
        for (let k = 0; k < SIZE; ++k) {
          // Convert elements to BigInt before multiplication
          sum = (sum + BigInt(m1[row][k]) * BigInt(m2[k][col])) % MOD;
        }
        // Store the result as a Number after modulo
        ans[row][col] = Number(sum);
      }
    }
    return ans;
  }

  /** Return pow(SQ_MATRIX, n) using recursion and memoization */
  function matrixExpo(power) {
    // Use cache if `power` is already calculated
    if (cache.has(power)) {
      return cache.get(power);
    }

    let cur;
    if (power === 1) {
      // base case
      cur = SQ_MATRIX;
    } else if (power % 2 === 1) {
      // When `power` is odd
      // Calculate matrixExpo(power - 1) recursively
      const prevMatrix = matrixExpo(power - 1);
      cur = matrixProduct(prevMatrix, SQ_MATRIX);
    } else {
      // When `power` is even
      // Calculate matrixExpo(power / 2) recursively
      const halfMatrix = matrixExpo(power / 2);
      cur = matrixProduct(halfMatrix, halfMatrix);
    }

    // Store the result in the cache before returning
    cache.set(power, cur);
    return cur;
  }

  // Handle base cases
  if (n <= 2) {
    return n;
  }

  // Calculate SQ_MATRIX ^ (n - 2)
  const resultMatrix = matrixExpo(n - 2);

  // The answer is derived from the first row of the result matrix:
  // resultMatrix[0][0] * f(2) + resultMatrix[0][1] * f(1) + resultMatrix[0][2] * p(2)
  // where f(2)=2, f(1)=1, p(2)=1
  const ansRow = resultMatrix[0];
  const finalResult = (BigInt(ansRow[0]) * 2n + BigInt(ansRow[1]) * 1n + BigInt(ansRow[2]) * 1n) % MOD;

  // Return the final result as a Number
  return Number(finalResult);
};

var n = 3;
var expected = 5;
var result = numTilings(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = numTilings(n);
console.log(result, result === expected);

var allExpected = [
  0, 1, 2, 5, 11, 24, 53, 117, 258, 569, 1255, 2768, 6105, 13465, 29698, 65501, 144467, 318632, 702765, 1549997,
  3418626,
];
for (let n = 4; n <= 20; n++) {
  const result = numTilings(n);
  const expected = allExpected[n];
  console.log(n, result, result === expected);
}
