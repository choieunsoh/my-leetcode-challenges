// 386. Lexicographical Numbers
// https://leetcode.com/problems/lexicographical-numbers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const nums = [];
  for (let num = 1; num <= 9; num++) {
    generateNumber(num);
  }
  return nums;

  function generateNumber(currentNum) {
    if (currentNum > n) return;

    nums.push(currentNum);

    for (let num = 0; num <= 9; num++) {
      const nextNum = currentNum * 10 + num;
      if (nextNum > n) break;
      generateNumber(nextNum);
    }
  }
};

var n = 13;
var expected = [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9];
var result = lexicalOrder(n);
console.log(result, result.join() === expected.join());

var n = 2;
var expected = [1, 2];
var result = lexicalOrder(n);
console.log(result, result.join() === expected.join());

var n = 125;
var expected = [
  1, 10, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 11, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 12,
  120, 121, 122, 123, 124, 125, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 4, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 5, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 6,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 7, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 8, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 89, 9, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];
var result = lexicalOrder(n);
console.log(result, result.join() === expected.join());
