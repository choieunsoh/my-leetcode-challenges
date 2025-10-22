// 1570. Dot Product of Two Sparse Vectors
// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.pairs = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this.pairs.push([i, nums[i]]);
    }
  }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  const pairs = this.pairs;
  let result = 0;
  let p = 0;
  let q = 0;
  while (p < pairs.length && q < vec.pairs.length) {
    if (pairs[p][0] === vec.pairs[q][0]) {
      result += pairs[p][1] * vec.pairs[q][1];
      p++;
      q++;
    } else if (pairs[p][0] > vec.pairs[q][0]) {
      q++;
    } else {
      p++;
    }
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
