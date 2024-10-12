// 1426. Counting Elements
// https://leetcode.com/problems/counting-elements/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const seen = new Set(arr);
  let result = 0;
  for (const num of arr) {
    if (seen.has(num + 1)) {
      result++;
    }
  }
  return result;
};

var arr = [1, 2, 3];
var expected = 2;
var result = countElements(arr);
console.log(result, result === expected);

var arr = [1, 1, 3, 3, 5, 5, 7, 7];
var expected = 0;
var result = countElements(arr);
console.log(result, result === expected);
