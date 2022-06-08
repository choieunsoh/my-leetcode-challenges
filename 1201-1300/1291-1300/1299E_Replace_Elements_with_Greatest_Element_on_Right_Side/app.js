// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// 1299. Replace Elements with Greatest Element on Right Side
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];

  let index = arr.length - 1;
  let max = -1;
  while (index >= 0) {
    const num = arr[index];
    arr[index] = max;
    if (num > max) max = num;
    index--;
  }

  return arr;
};

var arr = [17, 18, 5, 4, 6, 1];
var expected = [18, 6, 6, 6, 1, -1];
var result = replaceElements(arr);
console.log(result.join(' '), result.join(' ') === expected.join(' '));

var arr = [400];
var expected = [-1];
var result = replaceElements(arr);
console.log(result.join(' '), result.join(' ') === expected.join(' '));
