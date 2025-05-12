// 2094. Finding 3-Digit Even Numbers
// https://leetcode.com/problems/finding-3-digit-even-numbers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const counts = new Array(10).fill(0);
  for (const digit of digits) {
    counts[digit]++;
  }

  const result = [];
  for (let a = 1; a < 10; a++) {
    if (counts[a] === 0) continue;
    counts[a]--;
    for (let b = 0; b < 10; b++) {
      if (counts[b] === 0) continue;
      counts[b]--;
      for (let c = 0; c < 10; c += 2) {
        if (counts[c] === 0) continue;
        const num = a * 100 + b * 10 + c;
        result.push(num);
      }
      counts[b]++;
    }
    counts[a]++;
  }

  return result;
};

var digits = [2, 1, 3, 0];
var expected = [102, 120, 130, 132, 210, 230, 302, 310, 312, 320];
var result = findEvenNumbers(digits);
console.log(result, result.join() === expected.join());

var digits = [2, 2, 8, 8, 2];
var expected = [222, 228, 282, 288, 822, 828, 882];
var result = findEvenNumbers(digits);
console.log(result, result.join() === expected.join());

var digits = [3, 7, 5];
var expected = [];
var result = findEvenNumbers(digits);
console.log(result, result.join() === expected.join());
