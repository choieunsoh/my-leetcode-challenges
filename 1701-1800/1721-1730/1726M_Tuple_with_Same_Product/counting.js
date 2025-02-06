// 1726. Tuple with Same Product
// https://leetcode.com/problems/tuple-with-same-product/description/
// T.C.: O(n^2 log n)
// S.C.: O(n^2)
/*
Combinations Formula:
nCr = C(n,r) = n!/(r!(n−r)!)
nC2 = C(n,2) = n!/(2!(n−2)!) = n(n-1)/2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const numsLength = nums.length;

  const pairProducts = [];

  let totalNumberOfTuples = 0;

  // Iterate over nums to calculate all pairwise products
  for (let firstIndex = 0; firstIndex < numsLength; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < numsLength; secondIndex++) {
      pairProducts.push(nums[firstIndex] * nums[secondIndex]);
    }
  }

  pairProducts.sort((a, b) => a - b);

  let lastProductSeen = -1;
  let sameProductCount = 0;

  // Iterate over pairProducts to count how many times each product occurs
  for (let productIndex = 0; productIndex < pairProducts.length; productIndex++) {
    if (pairProducts[productIndex] === lastProductSeen) {
      // Increment the count of same products
      sameProductCount++;
    } else {
      // Calculate how many pairs had the previous product value
      const pairsOfEqualProduct = ((sameProductCount - 1) * sameProductCount) / 2;

      totalNumberOfTuples += 8 * pairsOfEqualProduct;

      // Update lastProductSeen and reset sameProductCount
      lastProductSeen = pairProducts[productIndex];
      sameProductCount = 1;
    }
  }

  // Handle the last group of products (since the loop ends without adding it)
  const pairsOfEqualProduct = ((sameProductCount - 1) * sameProductCount) / 2;
  totalNumberOfTuples += 8 * pairsOfEqualProduct;

  return totalNumberOfTuples;
};

var nums = [2, 3, 4, 6];
var expected = 8;
var result = tupleSameProduct(nums);
console.log(result, result === expected);

var nums = [1, 2, 4, 5, 10];
var expected = 16;
var result = tupleSameProduct(nums);
console.log(result, result === expected);

var nums = [2, 3, 4, 6, 1, 12];
var expected = 40;
var result = tupleSameProduct(nums);
console.log(result, result === expected);
