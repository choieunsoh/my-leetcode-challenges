// 380. Insert Delete GetRandom O(1)
// https://leetcode.com/problems/insert-delete-getrandom-o1/

class RandomizedSet {
  constructor() {
    this.nums = [];
    this.indices = new Map();
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.indices.has(val)) return false;
    const index = this.nums.length;
    this.indices.set(val, index);
    this.nums.push(val);
    return true;
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.indices.has(val)) return false;
    const index = this.indices.get(val);
    this.indices.delete(val);
    if (index === this.nums.length - 1) {
      this.nums.pop();
    } else {
      const last = this.nums.pop();
      this.nums[index] = last;
      this.indices.set(last, index);
    }
    return true;
  }

  /**
   * @return {number}
   */
  getRandom() {
    const index = (Math.random() * this.indices.size) | 0;
    return this.nums[index];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet();
var nums = [1, 1, 3, 3, 6, 8, 10, 2, 5, 7];
nums.forEach((num) => console.log(obj.insert(num)));
nums.forEach((num) => console.log(obj.getRandom()));
var nums = [7, 1, 11, 7, 6, 3];
nums.forEach((num) => console.log(obj.remove(num)));
