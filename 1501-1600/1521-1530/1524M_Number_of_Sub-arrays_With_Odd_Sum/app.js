// 1524. Number of Sub-arrays With Odd Sum
// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7;
  let count = 0;
  let oddCount = 0;
  let evenCount = 1;
  let prefixSum = 0;
  for (const num of arr) {
    prefixSum += num;
    if (prefixSum % 2 === 0) {
      count += oddCount;
      evenCount++;
    } else {
      count += evenCount;
      oddCount++;
    }
    count %= MOD;
  }
  return count;
};

var arr = [1, 3, 5];
var expected = 4;
var result = numOfSubarrays(arr);
console.log(result, result === expected);

var arr = [2, 4, 6];
var expected = 0;
var result = numOfSubarrays(arr);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5, 6, 7];
var expected = 16;
var result = numOfSubarrays(arr);
console.log(result, result === expected);
