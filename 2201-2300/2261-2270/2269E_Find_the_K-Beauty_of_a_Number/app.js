// 2269. Find the K-Beauty of a Number
// https://leetcode.com/problems/find-the-k-beauty-of-a-number/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let result = 0;
  const str = num.toString();
  for (let i = 0; i <= str.length - k; i++) {
    const n = Number(str.substring(i, i + k));
    if (n > 0 && num % n === 0) result++;
  }
  return result;
};

var num = 240,
  k = 2;
var expected = 2;
var result = divisorSubstrings(num, k);
console.log(result, result === expected);

var num = 430043,
  k = 2;
var expected = 2;
var result = divisorSubstrings(num, k);
console.log(result, result === expected);
