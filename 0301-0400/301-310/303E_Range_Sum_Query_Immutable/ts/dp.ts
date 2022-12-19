// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/description/
class NumArray {
  private sum: number[] = [0];

  constructor(nums: number[]) {
    this.sum = [0];
    for (let i = 0; i < nums.length; i++) {
      this.sum[i + 1] = this.sum[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.sum[right + 1] - this.sum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
var nums: number[] | null = [-2, 0, 3, -5, 2, -1];
var ranges = [
  [0, 2],
  [2, 5],
  [0, 5],
];
var obj = new NumArray(nums);
for (const [left, right] of ranges) {
  const sum = obj.sumRange(left, right);
  console.log([left, right], sum);
}
