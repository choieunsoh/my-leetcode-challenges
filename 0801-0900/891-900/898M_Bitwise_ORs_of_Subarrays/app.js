// 898. Bitwise ORs of Subarrays
// https://leetcode.com/problems/bitwise-ors-of-subarrays/description/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  let currentOr = 0;
  const uniqueOrValues = new Set();
  for (let i = 0; i < arr.length; i++) {
    currentOr |= arr[i];
    let subarrayOr = 0;
    for (let j = i; j >= 0; j--) {
      subarrayOr |= arr[j];
      uniqueOrValues.add(subarrayOr);
      if (subarrayOr === currentOr) break;
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
