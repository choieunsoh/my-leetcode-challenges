// 247. Strobogrammatic Number II
// https://leetcode.com/problems/strobogrammatic-number-ii/description/
// T.C.: O(n * 5^(n/2+1))
// S.C.: O(n * 5^(n/2))
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  const reverseNums = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6'],
  ];
  return generateNumbers(n, n);

  function generateNumbers(n, finalLength) {
    if (n === 0) {
      return [''];
    }

    if (n === 1) {
      return ['0', '1', '8'];
    }

    const prevNums = generateNumbers(n - 2, finalLength);
    const currNums = [];

    prevNums.forEach((prevNum) => {
      reverseNums.forEach(([first, last]) => {
        if (first !== '0' || n !== finalLength) {
          currNums.push(first + prevNum + last);
        }
      });
    });

    return currNums;
  }
};

var n = 2;
var expected = ['11', '69', '88', '96'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 1;
var expected = ['0', '1', '8'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 3;
var expected = ['101', '111', '181', '609', '619', '689', '808', '818', '888', '906', '916', '986'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4;
var expected = [
  '1001',
  '1111',
  '1691',
  '1881',
  '1961',
  '6009',
  '6119',
  '6699',
  '6889',
  '6969',
  '8008',
  '8118',
  '8698',
  '8888',
  '8968',
  '9006',
  '9116',
  '9696',
  '9886',
  '9966',
];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());
