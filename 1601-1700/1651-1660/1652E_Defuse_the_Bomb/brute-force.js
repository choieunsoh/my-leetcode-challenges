// 1652. Defuse the Bomb
// https://leetcode.com/problems/defuse-the-bomb/description/
// T.C.: O(n*k)
// S.C.: O(1)
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const result = new Array(code.length).fill(0);
  if (k === 0) return result;

  for (let i = 0; i < n; i++) {
    if (k > 0) {
      // If k is greater than 0, store the sum of next k numbers.
      for (let j = i + 1; j < i + k + 1; j++) {
        result[i] += code[j % n];
      }
    } else {
      // If k is less than 0, store the sum of previous -1*k numbers.
      for (let j = i - Math.abs(k); j < i; j++) {
        result[i] += code[(j + n) % n];
      }
    }
  }
  return result;
};

var code = [5, 7, 1, 4],
  k = 3;
var expected = [12, 10, 16, 13];
var result = decrypt(code, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var code = [1, 2, 3, 4],
  k = 0;
var expected = [0, 0, 0, 0];
var result = decrypt(code, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var code = [2, 4, 9, 3],
  k = -2;
var expected = [12, 5, 6, 13];
var result = decrypt(code, k);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
