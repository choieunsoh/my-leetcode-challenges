// 247. Strobogrammatic Number II
// https://leetcode.com/problems/strobogrammatic-number-ii/description/
// T.C.: O(n * 5^(n/2+1))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  const nums = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };
  const result = [];
  backtrack(n, '');
  return result;

  function backtrack(length, num) {
    if (length === 0) {
      if (num.length > 1 && num[0] === '0') return;
      result.push(num);
      return;
    }

    if (length === 1) {
      for (const key in nums) {
        if (key !== nums[key]) continue;
        const idx = (num.length / 2) | 0;
        const currNum = `${num.slice(0, idx)}${key}${num.slice(idx)}`;
        backtrack(length - 1, currNum);
      }
    } else {
      for (const key in nums) {
        const currNum = `${key}${num}${nums[key]}`;
        backtrack(length - 2, currNum);
      }
    }
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
