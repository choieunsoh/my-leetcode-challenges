// https://leetcode.com/problems/remove-element/
// 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.indexOf(val) === -1) return nums.length + 1;

  let left = 0;
  let len = nums.length;
  while (left < len) {
    if (nums[left] === val) {
      let right = left + 1;
      while (right < len && nums[right] === val) right++;

      if (right >= len) break;

      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    left++;
  }
  console.log(nums);
  return nums.indexOf(val);
};

var nums = [2],
  val = 3;
var expected = 1; // nums = [2,2,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);

var nums = [3, 2, 2, 3],
  val = 3;
var expected = 2; // nums = [2,2,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);

var nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
var expected = 5; // nums = [0,1,4,0,3,_,_,_]
var result = removeElement(nums, val);
console.log(result, expected, result === expected);
