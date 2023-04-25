// 2336. Smallest Number in Infinite Set
// https://leetcode.com/problems/smallest-number-in-infinite-set/
class SmallestInfiniteSet {
  constructor() {
    this.arr = new Array(1001).fill(true);
  }
  popSmallest() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
  }
  addBack(num) {
    this.arr[num] = true;
  }
}
