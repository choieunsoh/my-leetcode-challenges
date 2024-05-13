// 3048. Earliest Second to Mark Indices I
// https://leetcode.com/problems/earliest-second-to-mark-indices-i/description/
// T.C.: O((n + m) * log m)
// S.C.: O(n + m)
/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function (nums, changeIndices) {
  changeIndices = changeIndices.map((index) => index - 1);
  const n = nums.length;
  let left = 0;
  let right = changeIndices.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (isPossible(mid)) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index !== -1 ? index + 1 : -1;

  function isPossible(sec) {
    const last = new Array(n).fill(-1);
    for (let i = 0; i <= sec; i++) {
      last[changeIndices[i]] = i;
    }

    let marked = 0;
    let operations = 0;
    for (let i = 0; i <= sec; i++) {
      if (i === last[changeIndices[i]]) {
        if (nums[changeIndices[i]] > operations) return false;
        operations -= nums[changeIndices[i]];
        marked++;
      } else {
        operations++;
      }
    }
    return marked === n;
  }
};

var nums = [2, 2, 0],
  changeIndices = [2, 2, 2, 2, 3, 2, 2, 1];
var expected = 8;
var result = earliestSecondToMarkIndices(nums, changeIndices);
console.log(result, result === expected);

var nums = [1, 3],
  changeIndices = [1, 1, 1, 2, 1, 1, 1];
var expected = 6;
var result = earliestSecondToMarkIndices(nums, changeIndices);
console.log(result, result === expected);

var nums = [0, 1],
  changeIndices = [2, 2, 2];
var expected = -1;
var result = earliestSecondToMarkIndices(nums, changeIndices);
console.log(result, result === expected);
