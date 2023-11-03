// 481. Magical String
// https://leetcode.com/problems/magical-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  const arr = ['1', '2', '2'];
  let i = 0;
  let result = 1;
  while (arr.length < n) {
    const val = i % 2 === 0 ? '1' : '2';
    const isOne = val === '1';
    if (arr[i + 2] === '1') {
      arr.push(val);
      if (isOne) result++;
    } else {
      arr.push(val);
      if (isOne) result++;
      if (arr.length >= n) break;
      arr.push(val);
      if (isOne) result++;
    }
    i++;
  }
  return result;
};

var n = 6;
var expected = 3;
var result = magicalString(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = magicalString(n);
console.log(result, result === expected);
