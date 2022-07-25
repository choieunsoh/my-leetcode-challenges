// https://leetcode.com/problems/kth-largest-element-in-a-stream/
// 703. Kth Largest Element in a Stream
const { TreeNode, printTree } = require('../../../_utils/tree');
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.root = null;
  for (let i = 0; i < nums.length; i++) {
    this.root = this.insert(this.root, nums[i]);
  }
  console.log(this.root);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.root = this.insert(this.root, val);
  const result = this.search(this.root, this.k);
  printTree(this.root);
  return result;
};

KthLargest.prototype.insert = function (node, val) {
  if (!node) {
    node = new TreeNode(val);
    node.count = 1;
    return node;
  }
  if (val < node.val) {
    node.left = this.insert(node.left, val);
  } else {
    node.right = this.insert(node.right, val);
  }
  node.count++;
  return node;
};

KthLargest.prototype.search = function (node, k) {
  const rightCount = node.right?.count ?? 0;
  const leftCount = node.left?.count ?? 0;
  if (node.count - leftCount >= k && k > rightCount) {
    return node.val;
  } else if (rightCount >= k) {
    return this.search(node.right, k);
  } else {
    return this.search(node.left, k - (node.count - leftCount));
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
var obj = new KthLargest(3, [4, 5, 8, 2]);
var nums = [3, 5, 10, 9, 4];
for (var i = 0; i < nums.length; i++) {
  console.log(obj.add(nums[i]));
}
