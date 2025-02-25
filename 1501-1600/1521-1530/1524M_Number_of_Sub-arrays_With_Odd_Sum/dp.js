// 1524. Number of Sub-arrays With Odd Sum
// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    arr[i] %= 2;
  }

  const dpEven = new Array(n).fill(0);
  const dpOdd = new Array(n).fill(0);

  // Initialization based on the last element
  if (arr[n - 1] === 0) {
    // The last element is even
    dpEven[n - 1] = 1;
  } else {
    // The last element is odd
    dpOdd[n - 1] = 1;
  }

  for (let num = n - 2; num >= 0; num--) {
    if (arr[num] === 0) {
      // Even element contributes to even subarrays
      dpEven[num] = (1 + dpEven[num + 1]) % MOD;
      // Odd element continues the pattern
      dpOdd[num] = dpOdd[num + 1];
    } else {
      // Odd element contributes to odd subarrays
      dpOdd[num] = (1 + dpEven[num + 1]) % MOD;
      // Even element continues the pattern
      dpEven[num] = dpOdd[num + 1];
    }
  }

  let count = 0;
  for (const oddCount of dpOdd) {
    count = (count + oddCount) % MOD;
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
