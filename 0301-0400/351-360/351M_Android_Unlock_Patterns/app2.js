// 351. Android Unlock Patterns
// https://leetcode.com/problems/android-unlock-patterns/description/
// T.C.: O(3*8^n)
// S.C.: O(n)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function (m, n) {
  const jump = Array.from({ length: 10 }, () => new Array(10).fill(0));

  // Initialize the jump over numbers for all valid jumps
  jump[1][3] = jump[3][1] = 2;
  jump[4][6] = jump[6][4] = 5;
  jump[7][9] = jump[9][7] = 8;
  jump[1][7] = jump[7][1] = 4;
  jump[2][8] = jump[8][2] = 5;
  jump[3][9] = jump[9][3] = 6;
  jump[1][9] = jump[9][1] = jump[3][7] = jump[7][3] = 5;

  const visitedNumbers = new Array(10).fill(false);
  let totalPatterns = 0;

  // Count patterns starting from corner numbers (1, 3, 7, 9) and multiply by 4 due to symmetry
  totalPatterns += countPatternsFromNumber(1, 1, m, n, jump, visitedNumbers) * 4;

  // Count patterns starting from edge numbers (2, 4, 6, 8) and multiply by 4 due to symmetry
  totalPatterns += countPatternsFromNumber(2, 1, m, n, jump, visitedNumbers) * 4;

  // Count patterns starting from the center number (5)
  totalPatterns += countPatternsFromNumber(5, 1, m, n, jump, visitedNumbers);

  return totalPatterns;

  function countPatternsFromNumber(currentNumber, currentLength, minLength, maxLength, jump, visitedNumbers) {
    // Base case: if current pattern length exceeds maxLength, stop exploring
    if (currentLength > maxLength) return 0;

    let validPatterns = 0;
    // If current pattern length is within the valid range, count it
    if (currentLength >= minLength) {
      validPatterns++;
    }

    visitedNumbers[currentNumber] = true;

    // Explore all possible next numbers
    for (let nextNumber = 1; nextNumber <= 9; nextNumber++) {
      const jumpOverNumber = jump[currentNumber][nextNumber];
      // Check if the next number is unvisited and either:
      // 1. There's no number to jump over, or
      // 2. The number to jump over has been visited
      if (!visitedNumbers[nextNumber] && (jumpOverNumber === 0 || visitedNumbers[jumpOverNumber])) {
        validPatterns += countPatternsFromNumber(
          nextNumber,
          currentLength + 1,
          minLength,
          maxLength,
          jump,
          visitedNumbers
        );
      }
    }

    // Backtrack: unmark the current number before returning
    visitedNumbers[currentNumber] = false;

    return validPatterns;
  }
};

var m = 1,
  n = 1;
var expected = 9;
var result = numberOfPatterns(m, n);
console.log(result, result === expected);

var m = 1,
  n = 2;
var expected = 65;
var result = numberOfPatterns(m, n);
console.log(result, result === expected);
