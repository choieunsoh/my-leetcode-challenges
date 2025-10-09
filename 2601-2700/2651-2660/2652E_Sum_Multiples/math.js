// 2652. Sum Multiples
// https://leetcode.com/problems/sum-multiples/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  const sum3 = sumDivisibleBy(3);
  const sum5 = sumDivisibleBy(5);
  const sum7 = sumDivisibleBy(7);

  const sum15 = sumDivisibleBy(15); // Multiples of 3 and 5
  const sum21 = sumDivisibleBy(21); // Multiples of 3 and 7
  const sum35 = sumDivisibleBy(35); // Multiples of 5 and 7

  const sum105 = sumDivisibleBy(105); // Multiples of 3, 5, and 7

  return sum3 + sum5 + sum7 - sum15 - sum21 - sum35 + sum105;

  // Helper function to calculate sum of multiples of k up to n
  // It uses the formula for the sum of an arithmetic series
  function sumDivisibleBy(k) {
    const lastMultiple = Math.floor(n / k);
    // Sum of 1 + 2 + ... + lastMultiple is lastMultiple * (lastMultiple + 1) / 2
    // We multiply by k to get the sum of multiples
    return (k * lastMultiple * (lastMultiple + 1)) / 2;
  }
};

var n = 7;
var expected = 21;
var result = sumOfMultiples(n);
console.log(result, result === expected);

var n = 10;
var expected = 40;
var result = sumOfMultiples(n);
console.log(result, result === expected);

var n = 9;
var expected = 30;
var result = sumOfMultiples(n);
console.log(result, result === expected);
