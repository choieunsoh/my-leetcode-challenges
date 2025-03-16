// 3483. Unique 3-Digit Even Numbers
// https://leetcode.com/problems/unique-3-digit-even-numbers/description/
// T.C.: O(10^n)
// S.C.: O(n)
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const freq = Array(10).fill(0);
  for (const d of digits) {
    freq[d]++;
  }

  let count = 0;
  for (let i = 0; i < 10; i += 2) {
    if (freq[i] === 0) continue;

    freq[i]--;
    count += backtrack(1);
    freq[i]++;
  }

  return count;

  function backtrack(depth) {
    if (depth < 0) return 0;

    let count = 0;
    for (let i = 0; i < freq.length; i++) {
      if (freq[i] === 0) continue;

      freq[i]--;
      count += depth === 0 ? (i > 0 ? 1 : 0) : backtrack(depth - 1);
      freq[i]++;
    }
    return count;
  }
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
