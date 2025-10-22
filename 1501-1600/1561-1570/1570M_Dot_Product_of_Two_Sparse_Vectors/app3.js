// 1570. Dot Product of Two Sparse Vectors
// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.array = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let result = 0;
  for (let i = 0; i < this.array.length; i++) {
    result += this.array[i] * vec.array[i];
  }
  return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

var nums1 = [1, 0, 0, 2, 3],
  nums2 = [0, 3, 0, 4, 0];
var expected = 8;
var v1 = new SparseVector(nums1);
var v2 = new SparseVector(nums2);
var result = v1.dotProduct(v2);
console.log(result, result === expected);

var nums1 = [0, 1, 0, 0, 0],
  nums2 = [0, 0, 0, 0, 2];
var expected = 0;
var v1 = new SparseVector(nums1);
var v2 = new SparseVector(nums2);
var result = v1.dotProduct(v2);
console.log(result, result === expected);

var nums1 = [0, 1, 0, 0, 2, 0, 0],
  nums2 = [1, 0, 0, 0, 3, 0, 4];
var expected = 6;
var v1 = new SparseVector(nums1);
var v2 = new SparseVector(nums2);
var result = v1.dotProduct(v2);
console.log(result, result === expected);
