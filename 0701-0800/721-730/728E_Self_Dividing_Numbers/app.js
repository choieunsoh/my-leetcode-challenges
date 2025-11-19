// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/description/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];
  for (let num = left; num <= right; num++) {
    if (num % 10 === 0) continue;

    if (num < 10) {
      result.push(num);
      continue;
    }

    let n = num;
    while (n > 0) {
      const digit = n % 10;
      if (digit === 0 || num % digit !== 0) {
        break;
      }
      n = (n / 10) | 0;
    }

    if (n === 0) {
      result.push(num);
    }
  }
  return result;
};

var left = 1,
  right = 22;
var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
var result = selfDividingNumbers(left, right);
console.log(result, result.join() == expected.join());

var left = 47,
  right = 85;
var expected = [48, 55, 66, 77];
var result = selfDividingNumbers(left, right);
console.log(result, result.join() == expected.join());
