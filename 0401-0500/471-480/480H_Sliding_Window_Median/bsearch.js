// 480. Sliding Window Median
// https://leetcode.com/problems/sliding-window-median/
class Window {
  constructor() {
    this.store = [];
  }

  add(value) {
    let idx = this.indexOf(value);
    if (value > this.store[idx]) idx++;
    this.store.splice(idx, 0, value);
  }

  remove(value) {
    const idx = this.indexOf(value);
    this.store.splice(idx, 1);
  }

  median() {
    const mid = Math.floor(this.store.length / 2);
    const median = this.store[mid];
    return this.store.length % 2 ? median : (median + this.store[mid - 1]) / 2;
  }

  indexOf(value) {
    let lo = 0;
    let hi = this.store.length - 1;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (this.store[mid] < value) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  const window = new Window();
  for (let i = 0; i < k - 1; i++) {
    window.add(nums[i]);
  }
  const result = [];
  for (let i = k - 1; i < nums.length; i++) {
    window.add(nums[i]);
    result.push(window.median());
    window.remove(nums[i - k + 1]);
  }
  return result;
};

var nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
var expected = [1.0, -1.0, -1.0, 3.0, 5.0, 6.0];
var result = medianSlidingWindow(nums, k);
console.log(result, result.join() == expected.join());

var nums = [1, 2, 3, 4, 2, 3, 1, 4, 2],
  k = 3;
var expected = [2.0, 3.0, 3.0, 3.0, 2.0, 3.0, 2.0];
var result = medianSlidingWindow(nums, k);
console.log(result, result.join() == expected.join());
