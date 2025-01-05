// 3410. Maximize Subarray Sum After Removing All Occurrences of One Element
// https://leetcode.com/problems/maximize-subarray-sum-after-removing-all-occurrences-of-one-element/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySum = function (nums) {
  const n = nums.length;
  const segmentTree = new SegmentTree(nums);

  // Using Map to store indices by value
  const valueToIndices = new Map();
  for (let i = 0; i < n; i++) {
    if (!valueToIndices.has(nums[i])) {
      valueToIndices.set(nums[i], []);
    }
    valueToIndices.get(nums[i]).push(i);
  }

  let maxSubarraySum = segmentTree.getMaxSum();

  // If the largest value in the map is negative, return that value
  const maxKey = Math.max(...valueToIndices.keys());
  if (maxKey < 0) {
    return maxKey;
  }

  for (const [value, indices] of valueToIndices.entries()) {
    if (indices.length === n) continue;

    // Set elements at indices to 0 temporarily
    for (const idx of indices) {
      segmentTree.updateTree(0, n - 1, 0, idx, 0);
    }
    maxSubarraySum = Math.max(maxSubarraySum, segmentTree.getMaxSum());

    // Restore original values
    for (const idx of indices) {
      segmentTree.updateTree(0, n - 1, 0, idx, value);
    }
  }

  return maxSubarraySum;
};

class SegmentData {
  constructor(value = 0) {
    this.totalSum = value;
    this.maxSum = value !== undefined ? value : Number.MIN_SAFE_INTEGER;
    this.prefixSum = value !== undefined ? value : Number.MIN_SAFE_INTEGER;
    this.suffixSum = value !== undefined ? value : Number.MIN_SAFE_INTEGER;
  }
}

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.segmentTree = new Array(4 * this.n).fill(null).map(() => new SegmentData());
    this.buildTree(0, this.n - 1, 0, arr);
  }

  merge(left, right) {
    const result = new SegmentData();
    result.totalSum = left.totalSum + right.totalSum;
    result.prefixSum = Math.max(left.prefixSum, left.totalSum + right.prefixSum);
    result.suffixSum = Math.max(right.suffixSum, right.totalSum + left.suffixSum);
    result.maxSum = Math.max(left.maxSum, right.maxSum);
    result.maxSum = Math.max(result.maxSum, result.prefixSum);
    result.maxSum = Math.max(result.maxSum, result.suffixSum);
    result.maxSum = Math.max(result.maxSum, left.suffixSum + right.prefixSum);
    return result;
  }

  buildTree(left, right, index, arr) {
    if (left === right) {
      this.segmentTree[index] = new SegmentData(arr[left]);
      return;
    }
    const mid = Math.floor((left + right) / 2);
    this.buildTree(left, mid, 2 * index + 1, arr);
    this.buildTree(mid + 1, right, 2 * index + 2, arr);
    this.segmentTree[index] = this.merge(this.segmentTree[2 * index + 1], this.segmentTree[2 * index + 2]);
  }

  updateTree(left, right, index, position, value) {
    if (position < left || position > right) return;
    if (left === right && position === left) {
      this.segmentTree[index].totalSum =
        this.segmentTree[index].prefixSum =
        this.segmentTree[index].suffixSum =
        this.segmentTree[index].maxSum =
          value;
      return;
    }
    const mid = Math.floor((left + right) / 2);
    this.updateTree(left, mid, 2 * index + 1, position, value);
    this.updateTree(mid + 1, right, 2 * index + 2, position, value);
    this.segmentTree[index] = this.merge(this.segmentTree[2 * index + 1], this.segmentTree[2 * index + 2]);
  }

  getMaxSum() {
    return this.segmentTree[0].maxSum;
  }
}

var nums = [-3, 2, -2, -1, 3, -2, 3];
var expected = 7;
var result = maxSubarraySum(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 10;
var result = maxSubarraySum(nums);
console.log(result, result === expected);
