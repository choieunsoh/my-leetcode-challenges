// 2381. Shifting Letters II
// https://leetcode.com/problems/shifting-letters-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const a = 'a'.charCodeAt(0);
  const n = s.length;
  const diffArray = new Array(n).fill(0); // Initialize a difference array with all elements set to 0.

  // Process each shift operation
  for (const shift of shifts) {
    if (shift[2] === 1) {
      // If direction is forward (1)
      diffArray[shift[0]]++; // Increment at the start index
      if (shift[1] + 1 < n) {
        diffArray[shift[1] + 1]--; // Decrement at the end+1 index
      }
    } else {
      // If direction is backward (0)
      diffArray[shift[0]]--; // Decrement at the start index
      if (shift[1] + 1 < n) {
        diffArray[shift[1] + 1]++; // Increment at the end+1 index
      }
    }
  }

  let result = '';
  let numberOfShifts = 0;

  // Apply the shifts to the string
  for (let i = 0; i < n; i++) {
    numberOfShifts = (numberOfShifts + diffArray[i]) % 26; // Update cumulative shifts, keeping within the alphabet range
    if (numberOfShifts < 0) numberOfShifts += 26; // Ensure non-negative shifts

    // Calculate the new character by shifting `s[i]`
    const shiftedChar = String.fromCharCode(a + ((s.charCodeAt(i) - a + numberOfShifts) % 26));
    result += shiftedChar;
  }

  return result;
};

var s = 'abc',
  shifts = [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ];
var expected = 'ace';
var result = shiftingLetters(s, shifts);
console.log(result, result === expected);

var s = 'dztz',
  shifts = [
    [0, 0, 0],
    [1, 1, 1],
  ];
var expected = 'catz';
var result = shiftingLetters(s, shifts);
console.log(result, result === expected);
