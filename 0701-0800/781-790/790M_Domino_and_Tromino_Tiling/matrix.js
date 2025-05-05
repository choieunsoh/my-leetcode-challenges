// 790. Domino and Tromino Tiling
// https://leetcode.com/problems/domino-and-tromino-tiling/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 1_000_000_007;
  const SIZE = 3; // Width/Length of the square matrix.

  // Initialize the square matrix.
  const SQ_MATRIX = [
    [1, 1, 2],
    [1, 0, 0],
    [0, 1, 1],
  ];

  /** Return product of 2 square matrices. */
  function matrixProduct(m1, m2) {
    // Result matrix `ans` will also be a 3x3 square matrix.
    const ans = Array(SIZE)
      .fill(0)
      .map(() => Array(SIZE).fill(0));
    for (let row = 0; row < SIZE; ++row) {
      for (let col = 0; col < SIZE; ++col) {
        let curSum = 0n; // Use BigInt for intermediate sum to prevent overflow
        for (let k = 0; k < SIZE; ++k) {
          // Ensure intermediate products are BigInt before summing
          curSum = (curSum + BigInt(m1[row][k]) * BigInt(m2[k][col])) % BigInt(MOD);
        }
        // Convert back to Number after modulo
        ans[row][col] = Number(curSum);
      }
    }
    return ans;
  }

  /** Return answer after `n` times matrix multiplication (linear). */
  function matrixExpoLinear(power) {
    if (power === 0) {
      // Return identity matrix if needed, but problem constraints avoid n=2 case here
      // For this specific problem, power starts at 1 (n-2)
      return SQ_MATRIX; // Or handle appropriately if power 0 is possible
    }
    let cur = SQ_MATRIX;
    // Note: The original Java code loops from i = 1 to n-1, meaning n multiplications.
    // If n=3, power=1, loop runs 0 times.
    // If n=4, power=2, loop runs 1 time (cur = product(SQ, SQ))
    // If n=5, power=3, loop runs 2 times (cur = product(product(SQ, SQ), SQ))
    // This calculates SQ_MATRIX ^ power
    for (let i = 1; i < power; ++i) {
      cur = matrixProduct(cur, SQ_MATRIX);
    }
    // The answer will be cur[0][0] * f(2) + cur[0][1] * f(1) + cur[0][2] * p(2)
    // f(2)=2, f(1)=1, p(2)=1
    // Use BigInt for the final calculation as well
    const result = (BigInt(cur[0][0]) * 2n + BigInt(cur[0][1]) * 1n + BigInt(cur[0][2]) * 1n) % BigInt(MOD);
    return Number(result);
  }

  // --- Optimized Matrix Exponentiation (Exponentiation by Squaring) ---
  // T.C: O(log n) * matrix_size^3 = O(log n) since matrix size is constant 3x3

  /** Identity Matrix */
  function identityMatrix() {
    const id = Array(SIZE)
      .fill(0)
      .map(() => Array(SIZE).fill(0));
    for (let i = 0; i < SIZE; i++) {
      id[i][i] = 1;
    }
    return id;
  }

  /** Return matrix^power using exponentiation by squaring */
  function matrixPower(matrix, power) {
    let res = identityMatrix();
    let base = matrix; // Use a copy or ensure matrixProduct doesn't modify inputs

    while (power > 0) {
      if (power % 2 === 1) {
        res = matrixProduct(res, base);
      }
      base = matrixProduct(base, base);
      power = Math.floor(power / 2);
    }
    return res;
  }

  /** Return answer using optimized matrix exponentiation. */
  function matrixExpoOptimized(power) {
    if (power === 0) {
      // If n=2, power is 0. The base cases handle n=1, n=2 directly.
      // If the logic required power=0 result, it would correspond to f(2)
      return 2; // Or handle based on specific recurrence relation needs
    }

    const finalMatrix = matrixPower(SQ_MATRIX, power);

    // The answer will be finalMatrix[0][0] * f(2) + finalMatrix[0][1] * f(1) + finalMatrix[0][2] * p(2)
    // f(2)=2, f(1)=1, p(2)=1
    const result =
      (BigInt(finalMatrix[0][0]) * 2n + BigInt(finalMatrix[0][1]) * 1n + BigInt(finalMatrix[0][2]) * 1n) % BigInt(MOD);
    return Number(result);
  }
  // --- End Optimized Matrix Exponentiation ---

  // Handle base cases.
  if (n <= 2) {
    return n;
  }
  // Use the optimized O(log n) version
  return matrixExpoOptimized(n - 2);
  // Or use the direct translation O(n) version:
  // return matrixExpoLinear(n - 2);
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
