/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
  //
};

var num1 = '1',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 11;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '7',
  num2 = '12',
  min_num = 1,
  max_num = 8;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '1',
  num2 = '5',
  min_num = 1,
  max_num = 5;
var expected = 5;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);

var num1 = '6312',
  num2 = '9416',
  min_num = 29,
  max_num = 30;
var expected = 114;
var result = count(num1, num2, min_num, max_num);
console.log(result, result === expected);
