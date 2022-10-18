// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  const str = countAndSay(n - 1);

  const result = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      i++;
      count++;
    }
    result.push(`${count}${str[i]}`);
  }
  return result.join('');
};

var n = 1;
var expected = '1';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 4;
var expected = '1211';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 5;
var expected = '111221';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 6;
var expected = '312211';
var result = countAndSay(n);
console.log(result, result === expected);
