// 421. Maximum XOR of Two Numbers in an Array
// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let result = 0;
  let mask = 0;

  for (let num = 31; num >= 0; num--) {
    mask |= 1 << num;
    const set = new Set();
    const t = result | (1 << num);

    nums.forEach((num) => set.add(num & mask));

    for (const prefix of set) {
      if (set.has(t ^ prefix)) {
        result = t;
        break;
      }
    }
  }

  return result;
};

var nums = [3, 10, 5, 25, 2, 8];
var expected = 28;
var result = findMaximumXOR(nums);
console.log(result, result === expected);

var nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70];
var expected = 127;
var result = findMaximumXOR(nums);
console.log(result, result === expected);
