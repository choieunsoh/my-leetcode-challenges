// 306. Additive Number
// https://leetcode.com/problems/additive-number/
// T.C.: O(n * 2^n)
// S.C.: O(n)
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  return backtrack(num, [], 0);

  function backtrack(num, arr, start) {
    if (start === num.length && arr.length >= 3) return true;

    for (let i = start; i < num.length; i++) {
      if (num[start] === '0' && i !== start) break;

      const sum = Number(num.slice(start, i + 1));
      if (arr.at(-1) + arr.at(-2) !== sum && arr.length >= 2) continue;

      if (backtrack(num, [...arr, sum], i + 1)) {
        return true;
      }
    }

    return false;
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
