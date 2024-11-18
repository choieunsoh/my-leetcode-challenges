// 1652. Defuse the Bomb
// https://leetcode.com/problems/defuse-the-bomb/description/
// T.C.: O(n)
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

  let windowSum = 0;
  let startIndex = 1;
  let endIndex = k;
  if (k < 0) {
    startIndex = n - Math.abs(k);
    endIndex = n - 1;
  }
  for (let i = startIndex; i <= endIndex; i++) {
    windowSum += code[i];
  }

  for (let i = 0; i < n; i++) {
    result[i] = windowSum;
    const removeIndex = startIndex % n;
    const addIndex = (endIndex + 1) % n;
    windowSum += code[addIndex] - code[removeIndex];
    startIndex++;
    endIndex++;
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
