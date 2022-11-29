// https://leetcode.com/problems/majority-element/
// 169. Majority Element
var majorityElement = function (nums: number[]): number {
  const min = nums.length / 2;
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = (map.get(num) ?? 0) + 1;
    map.set(num, count);
    if (count > min) return num;
  }
  return nums[0];
};

var nums = [3, 2, 3];
var expected = 3;
console.log(majorityElement(nums), expected);

var nums = [2, 2, 1, 1, 1, 2, 2];
var expected = 2;
console.log(majorityElement(nums), expected);
