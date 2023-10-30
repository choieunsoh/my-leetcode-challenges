// 402. Remove K Digits
// https://leetcode.com/problems/remove-k-digits/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let removed = 0;
  const stack = [];
  for (const n of num) {
    while (stack.length && n < stack.at(-1) && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  let index = 0;
  while (stack[index] === '0') {
    index++;
  }

  return index === stack.length ? '0' : stack.slice(index).join('');
};

var num = '1432219',
  k = 3;
var expected = '1219';
var result = removeKdigits(num, k);
console.log(result, result === expected);

var num = '10200',
  k = 1;
var expected = '200';
var result = removeKdigits(num, k);
console.log(result, result === expected);

var num = '10',
  k = 2;
var expected = '0';
var result = removeKdigits(num, k);
console.log(result, result === expected);

var num = '10',
  k = 1;
var expected = '0';
var result = removeKdigits(num, k);
console.log(result, result === expected);

var num = '100',
  k = 1;
var expected = '0';
var result = removeKdigits(num, k);
console.log(result, result === expected);
