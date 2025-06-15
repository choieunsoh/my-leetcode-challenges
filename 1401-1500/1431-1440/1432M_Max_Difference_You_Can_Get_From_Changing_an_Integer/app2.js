// 1432. Max Difference You Can Get From Changing an Integer
// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/description/
// T.C.: O(log(num))
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  let minNum = num.toString();
  let maxNum = num.toString();

  for (let digit of maxNum) {
    if (digit !== '9') {
      maxNum = maxNum.replaceAll(digit, '9');
      break;
    }
  }

  for (let i = 0; i < minNum.length; ++i) {
    const digit = minNum[i];
    if (i === 0) {
      if (digit !== '1') {
        minNum = minNum.replaceAll(digit, '1');
        break;
      }
    } else {
      if (digit > '1') {
        minNum = minNum.replaceAll(digit, '0');
        break;
      }
    }
  }

  const min = Number(minNum);
  const max = Number(maxNum);
  return max - min;
};

var num = 555;
var expected = 888;
var result = maxDiff(num);
console.log(result, result === expected);

var num = 9;
var expected = 8;
var result = maxDiff(num);
console.log(result, result === expected);

var num = 987;
var expected = 810;
var result = maxDiff(num);
console.log(result, result === expected);

var num = 111;
var expected = 888;
var result = maxDiff(num);
console.log(result, result === expected);

var num = 999;
var expected = 888;
var result = maxDiff(num);
console.log(result, result === expected);

var num = 1101057;
var expected = 8808050;
var result = maxDiff(num);
console.log(result, result === expected);
