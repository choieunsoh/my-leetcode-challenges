// 2916. Subarrays Distinct Element Sum of Squares II
// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let res = 0n;
  let cur = 0n;
  const n = nums.length;
  const bit = new BIT(n + 10);
  const seen = new Map();
  const mod = 1000000007n;
  for (let i = 0; i < n; i++) {
    const a = nums[i];
    const j = (seen.has(a) ? seen.get(a) : -1) + 1;
    const q = BigInt(bit.query(j, i));
    cur = (cur + q * 2n + BigInt(i - j + 1)) % mod;
    res = (res + cur) % mod;
    bit.add(j, i, 1);
    seen.set(a, i);
  }
  return Number(res);
};

class BIT {
  constructor(n) {
    this.size = n;
    this._tree1 = new Float64Array(n + 2);
    this._tree2 = new Float64Array(n + 2);
  }

  _lowbit(index) {
    return index & -index;
  }

  add(left, right, delta) {
    this._add(left, delta);
    this._add(right + 1, -delta);
  }

  query(left, right) {
    return this._query(right) - this._query(left - 1);
  }

  _add(index, delta) {
    index += 1;
    let rawIndex = index;
    while (index <= this.size) {
      this._tree1[index] += delta;
      this._tree2[index] += rawIndex * delta;
      index += this._lowbit(index);
    }
  }

  _query(index) {
    index += 1;
    let rawIndex = index + 1;
    if (index > this.size) {
      index = this.size;
    }
    let res = 0;
    while (index > 0) {
      res += rawIndex * this._tree1[index] - this._tree2[index];
      index -= this._lowbit(index);
    }
    return res;
  }
}

var nums = [1, 2, 1];
var expected = 15;
var result = sumCounts(nums);
console.log(result, result === expected);

var nums = [2, 2];
var expected = 3;
var result = sumCounts(nums);
console.log(result, result === expected);
