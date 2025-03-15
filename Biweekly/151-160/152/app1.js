/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const unique = new Set();
  backtrack('', new Set());
  return unique.size;

  function backtrack(numStr, used) {
    if (numStr.length === 3) {
      const num = Number(numStr);
      if (num % 2 === 0) unique.add(num);
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (used.has(i)) continue;
      if (numStr === '' && digits[i] === 0) continue;
      used.add(i);
      backtrack(numStr + digits[i], used);
      used.delete(i);
    }
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
