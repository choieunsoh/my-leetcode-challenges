/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function (nums) {
  const n = nums.length;
  let sum = 0;
  const counts = new Map();
  for (const num of nums) {
    sum += num;
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  let maxOutlier = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    const tempSum = sum - num;
    const count = counts.get(num);
    counts.set(num, counts.get(num) - 1);
    if (tempSum % 2 === 0) {
      const sumCandidate = tempSum / 2;
      if (counts.get(sumCandidate) > 0) {
        maxOutlier = Math.max(maxOutlier, num);
      }
    }
    counts.set(num, counts.get(num) + 1);
  }

  return maxOutlier;
};

var nums = [2, 3, 5, 10];
var expected = 10;
var result = getLargestOutlier(nums);
console.log(result, result === expected);

var nums = [-2, -1, -3, -6, 4];
var expected = 4;
var result = getLargestOutlier(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1, 5, 5];
var expected = 5;
var result = getLargestOutlier(nums);
console.log(result, result === expected);

var nums = [1, -1, 2, -2, 3, -3, 3];
var expected = -1;
var result = getLargestOutlier(nums);
console.log(result, result === expected);

var nums = [963, -626, 963];
var expected = -626;
var result = getLargestOutlier(nums);
console.log(result, result === expected);

var nums = [963, -626, -1, 964];
var expected = -626;
var result = getLargestOutlier(nums);
console.log(result, result === expected);
