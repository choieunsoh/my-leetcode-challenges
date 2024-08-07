// 273. Integer to English Words
// https://leetcode.com/problems/integer-to-english-words/description/
// T.C.: O(log_10 N)
// S.C.: O(1)
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const groups = ['', 'Thousand', 'Million', 'Billion'];
  const numberMap = new Map([
    [100, 'Hundred'],
    [90, 'Ninety'],
    [80, 'Eighty'],
    [70, 'Seventy'],
    [60, 'Sixty'],
    [50, 'Fifty'],
    [40, 'Forty'],
    [30, 'Thirty'],
    [20, 'Twenty'],
    [19, 'Nineteen'],
    [18, 'Eighteen'],
    [17, 'Seventeen'],
    [16, 'Sixteen'],
    [15, 'Fifteen'],
    [14, 'Fourteen'],
    [13, 'Thirteen'],
    [12, 'Twelve'],
    [11, 'Eleven'],
    [10, 'Ten'],
    [9, 'Nine'],
    [8, 'Eight'],
    [7, 'Seven'],
    [6, 'Six'],
    [5, 'Five'],
    [4, 'Four'],
    [3, 'Three'],
    [2, 'Two'],
    [1, 'One'],
    [0, 'Zero'],
  ]);

  if (num === 0) {
    return numberMap.get(num);
  }

  let groupIndex = 0;
  let result = '';
  while (num) {
    const groupResult = [];
    if (num % 1000 > 0) {
      let part = num % 1000;
      if (part >= 100) {
        const digit = Math.floor(part / 100);
        groupResult.push(numberMap.get(digit), numberMap.get(100));
        part %= 100;
      }

      if (part > 20) {
        const digit = Math.floor(part / 10);
        groupResult.push(numberMap.get(digit * 10));
        part %= 10;
      }

      if (part > 0) {
        groupResult.push(numberMap.get(part));
      }

      if (groupIndex > 0) {
        groupResult.push(groups[groupIndex]);
      }

      if (result) {
        result = ' ' + result;
      }

      result = groupResult.join(' ') + result;
    }

    num = Math.floor(num / 1000);
    groupIndex++;
  }

  return result;
};

var num = 100;
var expected = 'One Hundred';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 123;
var expected = 'One Hundred Twenty Three';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 12345;
var expected = 'Twelve Thousand Three Hundred Forty Five';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 1234567;
var expected = 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 0;
var expected = 'Zero';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 1234567891;
var expected = 'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One';
var result = numberToWords(num);
console.log(num, result, result === expected);

var num = 123456789123456;
var expected =
  'One Hundred Twenty Three Thousand Four Hundred Fifty Six Billion Seven Hundred Eighty Nine Million One Hundred Twenty Three Thousand Four Hundred Fifty Six';
var result = numberToWords(num);
console.log(num, result, result === expected);
