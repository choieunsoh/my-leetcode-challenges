// 898. Bitwise ORs of Subarrays
// https://leetcode.com/problems/bitwise-ors-of-subarrays/description/
// T.C.: O(n log max)
// S.C.: O(n log max)
/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  const uniqueOrValues = new Set();
  let curr = new Set([0]);
  for (const x of arr) {
    const next = new Set();
    for (const y of curr) {
      next.add(x | y);
    }
    next.add(x);
    curr = next;
    for (const num of curr) {
      uniqueOrValues.add(num);
    }
  }
  return uniqueOrValues.size;
};

var arr = [0];
var expected = 1;
var result = subarrayBitwiseORs(arr);
console.log(result, result === expected);

var arr = [1, 1, 2];
var expected = 3;
var result = subarrayBitwiseORs(arr);
console.log(result, result === expected);

var arr = [1, 2, 4];
var expected = 6;
var result = subarrayBitwiseORs(arr);
console.log(result, result === expected);
