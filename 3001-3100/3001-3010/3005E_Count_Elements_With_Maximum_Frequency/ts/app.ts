// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
var maxFrequencyElements = function (nums: number[]): number {
  let result = 0;
  let maxFreq = 0;
  const counts = new Array<number>(101).fill(0);
  for (const num of nums) {
    counts[num]++;
    if (counts[num] === maxFreq) {
      result += maxFreq;
    } else if (counts[num] > maxFreq) {
      maxFreq = counts[num];
      result = maxFreq;
    }
  }
  return result;
};

var nums = [1, 2, 2, 3, 1, 4];
var expected = 4;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 5;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);

var nums = [1, 2, 2, 3, 1, 4, 3, 4, 5, 5];
var expected = 10;
var result = maxFrequencyElements(nums);
console.log(result, result === expected);
