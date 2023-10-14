// 306. Additive Number
// https://leetcode.com/problems/additive-number/
// T.C.: O(n ^ 3)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const n = num.length;
  for (let i = 1; i <= n / 2; i++) {
    for (let j = 1; j <= (n - i) / 2; j++) {
      const num1 = num.substring(0, i);
      const num2 = num.substring(i, i + j);
      if (isLeadingZero(num1) || isLeadingZero(num2)) continue;
      if (isAddictive(num1, num2, i + j)) {
        return true;
      }
    }
  }
  return false;

  function isLeadingZero(num) {
    return num.length > 1 && num.charAt(0) === '0';
  }

  function isAddictive(num1, num2, startIndex) {
    if (startIndex === n) return true;

    const sum = (BigInt(num1) + BigInt(num2)).toString();
    if (!num.startsWith(sum, startIndex)) return false;

    return isAddictive(num2, sum, startIndex + sum.length);
  }
};

var num = '112358';
var expected = true;
var result = isAdditiveNumber(num);
console.log(result, result === expected);

var num = '199100199';
var expected = true;
var result = isAdditiveNumber(num);
console.log(result, result === expected);
