// 1726. Tuple with Same Product
// https://leetcode.com/problems/tuple-with-same-product/description/
// T.C.: O(n^2)
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
  const productCounts = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      productCounts.set(product, (productCounts.get(product) ?? 0) + 1);
    }
  }

  let result = 0;
  for (const [, count] of productCounts) {
    const pairs = (count * (count - 1)) / 2;
    result += pairs * 8;
  }
  return result;
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
