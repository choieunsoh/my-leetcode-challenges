// 3321. Find X-Sum of All K-Long Subarrays II
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { AvlTree } = require('datastructures-js');

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const helper = new Helper(x);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    helper.insert(nums[i]);
    if (i >= k) {
      helper.remove(nums[i - k]);
    }
    if (i >= k - 1) {
      result.push(helper.get());
    }
  }

  return result;
};

class Helper {
  constructor(x) {
    this.x = x;
    this.result = 0n;

    const comparator = (a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    };

    this.large = new AvlTree(comparator);
    this.small = new AvlTree(comparator);
    this.occ = new Map();
  }

  insert(num) {
    const currentFreq = this.occ.get(num) || 0;
    if (currentFreq > 0) {
      this.internalRemove([currentFreq, num]);
    }

    const newFreq = currentFreq + 1;
    this.occ.set(num, newFreq);
    this.internalInsert([newFreq, num]);
  }

  remove(num) {
    const currentFreq = this.occ.get(num);
    if (currentFreq === undefined || currentFreq === 0) {
      return;
    }
    this.internalRemove([currentFreq, num]);
    const newFreq = currentFreq - 1;
    if (newFreq > 0) {
      this.occ.set(num, newFreq);
      this.internalInsert([newFreq, num]);
    } else {
      this.occ.delete(num);
    }
  }

  get() {
    return Number(this.result);
  }

  internalInsert(p) {
    const [freq, value] = p;
    const minLarge = this.large.min();
    if (this.large.count() < this.x || (minLarge && this.comparePairs(p, minLarge.getValue()) > 0)) {
      this.result += BigInt(freq) * BigInt(value);
      this.large.insert(p);
      if (this.large.count() > this.x) {
        const smallestLarge = this.large.min();
        if (smallestLarge) {
          const value = smallestLarge.getValue();
          this.result -= BigInt(value[0]) * BigInt(value[1]);
          this.large.remove(value);
          this.small.insert(value);
        }
      }
    } else {
      this.small.insert(p);
    }
  }

  internalRemove(p) {
    const [freq, value] = p;
    if (this.large.has(p)) {
      this.result -= BigInt(freq) * BigInt(value);
      this.large.remove(p);
      if (this.small.count() > 0) {
        const largestSmall = this.small.max();
        if (largestSmall) {
          const value = largestSmall.getValue();
          this.result += BigInt(value[0]) * BigInt(value[1]);
          this.small.remove(value);
          this.large.insert(value);
        }
      }
    } else {
      this.small.remove(p);
    }
  }

  comparePairs(a, b) {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  }
}

var nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2;
var expected = [6, 10, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());

var nums = [3, 8, 7, 8, 7, 5],
  k = 2,
  x = 2;
var expected = [11, 15, 15, 15, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());
