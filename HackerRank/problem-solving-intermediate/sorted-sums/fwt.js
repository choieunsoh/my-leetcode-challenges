// T.C.: O(n log LIMIT)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
function sortedSum(nums) {
  const LIMIT = 10e6;
  const MOD = 10e9 + 7;
  const pre = new FenwickTree(LIMIT);
  const post = new FenwickTree(LIMIT);
  let currFn = 0;
  let sum = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    let pos = pre.sum(nums[i]) + 1;
    let greater = total - post.sum(nums[i]);
    currFn = (currFn + pos * nums[i] + greater) % MOD;
    sum = (sum + currFn) % MOD;
    pre.add(nums[i], 1);
    post.add(nums[i], nums[i]);
    total += nums[i];
  }

  return sum;
}

class FenwickTree {
  constructor(size) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  add(index, value) {
    if (index === 0) {
      this.tree[0] += value;
      return;
    }
    while (index < this.size) {
      this.tree[index] += value;
      index += index & -index;
    }
  }

  sum(index) {
    if (index < 0) {
      return 0;
    }
    let prefixSum = this.tree[0];
    while (index > 0) {
      prefixSum += this.tree[index];
      index -= index & -index;
    }
    return prefixSum;
  }

  rangeSum(left, right) {
    return this.sum(right) - this.sum(left - 1);
  }
}

var nums = [4, 3, 2, 1];
var expected = 65;
// 4
// 3 4
// 2 3 4
// 1 2 3 4
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [9, 5, 8];
var expected = 80;
// 9
// 5 9
// 5 8 9
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [5, 9];
var expected = 28;
// 5
// 5 9
var result = sortedSum(nums);
console.log(result, result === expected);

console.log((6).toString(2));
console.log((-6).toString(2));
console.log((6 & -6).toString(2));
