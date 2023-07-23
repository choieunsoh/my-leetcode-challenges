/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let result = 0;
  if (k <= numOnes) return k;
  k -= numOnes;
  result += numOnes;
  k -= numZeros;
  if (k > 0) return result - k;
  return result;
};

var numOnes = 3,
  numZeros = 2,
  numNegOnes = 0,
  k = 2;
var expected = 2;
var result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k);
console.log(result, result === expected);

var numOnes = 3,
  numZeros = 2,
  numNegOnes = 0,
  k = 4;
var expected = 3;
var result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k);
console.log(result, result === expected);

var numOnes = 1,
  numZeros = 2,
  numNegOnes = 5,
  k = 4;
var expected = 0;
var result = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k);
console.log(result, result === expected);
