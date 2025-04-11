// 2843. Count Symmetric Integers
// https://leetcode.com/problems/count-symmetric-integers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let num = low; num <= high; num++) {
    const str = num.toString();
    if (str.length % 2 === 1) continue;

    let leftSum = 0;
    let rightSum = 0;
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      leftSum += +str[left++];
      rightSum += +str[right--];
    }
    count += leftSum === rightSum;
  }
  return count;
};

var low = 1,
  high = 100;
var expected = 9;
var result = countSymmetricIntegers(low, high);
console.log(result, result === expected);

var low = 1200,
  high = 1230;
var expected = 4;
var result = countSymmetricIntegers(low, high);
console.log(result, result === expected);
