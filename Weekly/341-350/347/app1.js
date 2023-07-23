/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let index = num.length - 1;
  while (num[index] === '0') index--;
  return num.substring(0, index + 1);
};

var num = '12345000';
var result = removeTrailingZeros(num);
console.log(result);

var num = '1234';
var result = removeTrailingZeros(num);
console.log(result);
