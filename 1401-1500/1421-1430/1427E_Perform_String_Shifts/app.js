// 1427. Perform String Shifts
// https://leetcode.com/problems/perform-string-shifts/description/
// T.C.: O(n+L)
// S.C.: O(L)
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  const n = s.length;
  let amount = 0;
  for (const [direction, distance] of shift) {
    amount += direction ? distance : -distance;
    amount %= n;
  }
  const pivot = (n - amount + n) % n;
  console.log(s.length, amount, pivot);
  return s.substring(pivot) + s.substring(0, pivot);
};

var s = 'abc',
  shift = [
    [0, 1],
    [1, 2],
  ];
var expected = 'cab';
var result = stringShift(s, shift);
console.log(result, result === expected);

var s = 'abcdefg',
  shift = [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ];
var expected = 'efgabcd';
var result = stringShift(s, shift);
console.log(result, result === expected);

var s = 'wpdhhcj',
  shift = [
    [0, 7],
    [1, 7],
    [1, 0],
    [1, 3],
    [0, 3],
    [0, 6],
    [1, 2],
  ];
var expected = 'hcjwpdh';
var result = stringShift(s, shift);
console.log(result, result === expected);

var s = 'szugtzxswvztitpnzgtbnusk',
  shift = [
    [1, 18],
    [1, 18],
    [1, 5],
    [1, 18],
    [0, 3],
    [0, 13],
    [1, 23],
    [0, 4],
    [0, 22],
    [0, 15],
    [0, 3],
    [0, 16],
    [0, 14],
    [1, 17],
    [0, 1],
    [0, 19],
    [1, 2],
    [1, 19],
    [1, 10],
    [0, 22],
    [1, 6],
    [1, 16],
    [1, 11],
    [1, 24],
  ];
var expected = 'gtbnuskszugtzxswvztitpnz';
var result = stringShift(s, shift);
console.log(result, result === expected);
