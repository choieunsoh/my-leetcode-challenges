// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
function maxSubarrayValue(arr) {
  let maxValue = 0;
  let totalEvenSum = 0;
  let totalOddSum = 0;
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
      totalEvenSum += arr[i];
    } else {
      oddSum += arr[i];
      totalOddSum += arr[i];
    }

    const currentValue = (evenSum - oddSum) ** 2;
    maxValue = Math.max(maxValue, currentValue);

    if (oddSum > evenSum) {
      evenSum = 0;
      oddSum = 0;
    }
  }

  maxValue = Math.max(maxValue, (totalEvenSum - totalOddSum) ** 2);
  return maxValue;
}

var arr = [2, -1, -4, 5];
var expected = 36;
var result = maxSubarrayValue(arr);
console.log(result, result === expected);

var arr = [-4, 2];
var expected = 36;
var result = maxSubarrayValue(arr);
console.log(result, result === expected);

var arr = [1, -1, 1, -1, 1];
var expected = 25;
var result = maxSubarrayValue(arr);
console.log(result, result === expected);

var arr = [-1, 2, 3, 4, -5];
var expected = 81;
var result = maxSubarrayValue(arr);
console.log(result, result === expected);
