// 3340. Check Balanced String
// https://leetcode.com/problems/check-balanced-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      sumEven += Number(num[i]);
    } else {
      sumOdd += Number(num[i]);
    }
  }
  return sumEven === sumOdd;
};

var num = '1234';
var expected = false;
var result = isBalanced(num);
console.log(result, result === expected);

var num = '24123';
var expected = true;
var result = isBalanced(num);
console.log(result, result === expected);
