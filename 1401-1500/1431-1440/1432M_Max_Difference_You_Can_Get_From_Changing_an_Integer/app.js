// 1432. Max Difference You Can Get From Changing an Integer
// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/description/
// T.C.: O(d^2 * log(num))
// S.C.: O(1)
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  let minNum = num;
  let maxNum = num;
  for (let x = 0; x < 10; ++x) {
    for (let y = 0; y < 10; ++y) {
      const resultStr = change(x, y);
      if (resultStr[0] !== '0') {
        const resultNum = Number(resultStr);
        minNum = Math.min(minNum, resultNum);
        maxNum = Math.max(maxNum, resultNum);
      }
    }
  }

  return maxNum - minNum;

  function change(x, y) {
    const numStr = num.toString();
    let result = '';
    for (const digit of numStr) {
      if (Number(digit) === x) {
        result += y.toString();
      } else {
        result += digit;
      }
    }
    return result;
  }
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
