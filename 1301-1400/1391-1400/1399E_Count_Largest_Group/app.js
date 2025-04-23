// 1399. Count Largest Group
// https://leetcode.com/problems/count-largest-group/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let countLargestGroup = 0;
  let largestGroup = 0;
  const sumCounts = new Array(40).fill(0);
  for (let num = 1; num <= n; num++) {
    const sum = sumDigits(num);
    sumCounts[sum]++;
    if (sumCounts[sum] > largestGroup) {
      largestGroup = sumCounts[sum];
      countLargestGroup = 1;
    } else if (sumCounts[sum] === largestGroup) {
      countLargestGroup++;
    }
  }
  return countLargestGroup;

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = (num / 10) | 0;
    }
    return sum;
  }
};

var n = 13;
var expected = 4;
var result = countLargestGroup(n);
console.log(result, result === expected);

var n = 2;
var expected = 2;
var result = countLargestGroup(n);
console.log(result, result === expected);
