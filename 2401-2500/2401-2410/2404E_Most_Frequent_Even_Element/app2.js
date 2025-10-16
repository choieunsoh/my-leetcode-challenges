// 2404. Most Frequent Even Element
// https://leetcode.com/problems/most-frequent-even-element/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const freq = new Uint8Array(100001); // Fastest fixed-size array for frequency
  let maxFreq = 0;
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
      freq[num]++;
      if (freq[num] > maxFreq || (freq[num] === maxFreq && num < result)) {
        maxFreq = freq[num];
        result = num;
      }
    }
  }

  return result;
};

var nums = [0, 1, 2, 2, 4, 4, 1];
var expected = 2;
var result = mostFrequentEven(nums);
console.log(result, result === expected);

var nums = [4, 4, 4, 9, 2, 4];
var expected = 4;
var result = mostFrequentEven(nums);
console.log(result, result === expected);

var nums = [29, 47, 21, 41, 13, 37, 25, 7];
var expected = -1;
var result = mostFrequentEven(nums);
console.log(result, result === expected);
