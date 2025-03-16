// 3483. Unique 3-Digit Even Numbers
// https://leetcode.com/problems/unique-3-digit-even-numbers/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  // Build frequency array for digits 0-9
  const freq = new Array(10).fill(0);
  for (const d of digits) freq[d]++;

  let count = 0;
  // Iterate only over even numbers from 100 to 999
  for (let num = 100; num < 1000; num += 2) {
    const a = (num / 100) | 0; // hundreds digit
    const b = ((num / 10) | 0) % 10; // tens digit
    const c = num % 10; // ones digit

    // Prepare the frequency requirement for this candidate
    const needed = new Array(10).fill(0);
    needed[a]++;
    needed[b]++;
    needed[c]++;

    // Check if each digit's needed count is available in input
    let canForm = true;
    for (let d = 0; d < 10; d++) {
      if (needed[d] > freq[d]) {
        canForm = false;
        break;
      }
    }
    if (canForm) count++;
  }
  return count;
};

var digits = [1, 2, 3, 4];
var expected = 12;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [0, 2, 2];
var expected = 2;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [6, 6, 6];
var expected = 1;
var result = totalNumbers(digits);
console.log(result, result === expected);

var digits = [1, 3, 5];
var expected = 0;
var result = totalNumbers(digits);
console.log(result, result === expected);
