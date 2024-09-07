// 1945. Sum of Digits of String After Convert
// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let currentNum = 0;
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - a + 1;
    currentNum += sumDigits(code);
  }

  while (--k > 0) {
    currentNum = sumDigits(currentNum);
  }
  return currentNum;

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var s = 'iiii',
  k = 1;
var expected = 36;
var result = getLucky(s, k);
console.log(result, result === expected);

var s = 'leetcode',
  k = 2;
var expected = 6;
var result = getLucky(s, k);
console.log(result, result === expected);

var s = 'zbax',
  k = 2;
var expected = 8;
var result = getLucky(s, k);
console.log(result, result === expected);
