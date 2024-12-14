// 2762. Continuous Subarrays
// https://leetcode.com/problems/continuous-subarrays/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let result = 0;
  const list = new SortedList();
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    list.add(nums[j]);
    while (!list.isEmpty() && list.diff() > 2) {
      list.remove(nums[i++]);
    }
    result += j - i + 1;
  }
  return result;
};

class SortedList {
  constructor() {
    this.list = [];
  }
  add(num) {
    const idx = this._binarySearch(num);
    this.list.splice(idx, 0, num);
  }
  remove(num) {
    const idx = this._binarySearch(num);
    this.list.splice(idx, 1);
  }
  isEmpty() {
    return this.list.length === 0;
  }
  max() {
    return this.list[this.list.length - 1];
  }
  min() {
    return this.list[0];
  }
  diff() {
    return this.max() - this.min();
  }
  get() {
    return this.list;
  }
  _binarySearch(target) {
    const list = this.list;
    let left = 0;
    let right = list.length;
    while (right > left) {
      const mid = (right + left) >> 1;
      if (list[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
}

var nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
var expected = 43;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 2, 4];
var expected = 8;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 6;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [31, 30, 31, 32];
var expected = 10;
var result = continuousSubarrays(nums);
console.log(result, result === expected);
