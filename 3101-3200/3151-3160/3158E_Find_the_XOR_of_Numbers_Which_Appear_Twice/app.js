// 3158. Find the XOR of Numbers Which Appear Twice
// https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let xor = 0;
  const counts = new Array(51).fill(0);
  for (const num of nums) {
    counts[num]++;
  }
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 2) {
      xor ^= i;
    }
  }
  return xor;
};

var nums = [1, 2, 1, 3];
var expected = 1;
var result = duplicateNumbersXOR(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 0;
var result = duplicateNumbersXOR(nums);
console.log(result, result === expected);

var nums = [1, 2, 2, 1];
var expected = 3;
var result = duplicateNumbersXOR(nums);
console.log(result, result === expected);
