// 989. Add to Array-Form of Integer
// https://leetcode.com/problems/add-to-array-form-of-integer/
var addToArrayForm = function (num: number[], k: number): number[] {
  num[num.length - 1] += k;
  for (let i = num.length - 1; i > 0; i--) {
    let value = num[i];
    num[i] = value % 10;
    num[i - 1] += (value / 10) | 0;
  }
  while (num[0] > 9) {
    let value = num[0];
    num[0] = value % 10;
    num.unshift((value / 10) | 0);
  }
  return num;
};

var num = [1, 2, 0, 0],
  k = 34;
var expected = [1, 2, 3, 4];
var result = addToArrayForm(num, k);
console.log(result, result.join() === expected.join());

var num = [2, 7, 4],
  k = 181;
var expected = [4, 5, 5];
var result = addToArrayForm(num, k);
console.log(result, result.join() === expected.join());

var num = [2, 1, 5],
  k = 806;
var expected = [1, 0, 2, 1];
var result = addToArrayForm(num, k);
console.log(result, result.join() === expected.join());

var num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  k = 516;
var expected = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9];
var result = addToArrayForm(num, k);
console.log(result, result.join() === expected.join());

var num = [0],
  k = 1000;
var expected = [1, 0, 0, 0];
var result = addToArrayForm(num, k);
console.log(result, result.join() === expected.join());
