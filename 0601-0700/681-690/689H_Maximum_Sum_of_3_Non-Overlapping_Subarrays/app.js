// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function (nums, k) {
  let bestOneStart = 0;
  const bestTwoStarts = [0, k];
  const bestThreeStarts = [0, k, 2 * k];

  let currentOneWindowSum = 0;
  let currentTwoWindowSum = 0;
  let currentThreeWindowSum = 0;

  for (let i = 0; i < k; i++) {
    currentOneWindowSum += nums[i];
    currentTwoWindowSum += nums[i + k];
    currentThreeWindowSum += nums[i + 2 * k];
  }

  let bestOneSum = currentOneWindowSum;
  let bestTwoSum = currentOneWindowSum + currentTwoWindowSum;
  let bestThreeSum = currentOneWindowSum + currentTwoWindowSum + currentThreeWindowSum;

  let oneStartIndex = 1;
  let twoStartIndex = k + 1;
  let threeStartIndex = 2 * k + 1;
  while (threeStartIndex <= nums.length - k) {
    currentOneWindowSum = currentOneWindowSum - nums[oneStartIndex - 1] + nums[oneStartIndex + k - 1];
    currentTwoWindowSum = currentTwoWindowSum - nums[twoStartIndex - 1] + nums[twoStartIndex + k - 1];
    currentThreeWindowSum = currentThreeWindowSum - nums[threeStartIndex - 1] + nums[threeStartIndex + k - 1];

    if (currentOneWindowSum > bestOneSum) {
      bestOneStart = oneStartIndex;
      bestOneSum = currentOneWindowSum;
    }

    if (currentTwoWindowSum + bestOneSum > bestTwoSum) {
      bestTwoStarts[0] = bestOneStart;
      bestTwoStarts[1] = twoStartIndex;
      bestTwoSum = currentTwoWindowSum + bestOneSum;
    }

    if (currentThreeWindowSum + bestTwoSum > bestThreeSum) {
      bestThreeStarts[0] = bestTwoStarts[0];
      bestThreeStarts[1] = bestTwoStarts[1];
      bestThreeStarts[2] = threeStartIndex;
      bestThreeSum = currentThreeWindowSum + bestTwoSum;
    }

    oneStartIndex++;
    twoStartIndex++;
    threeStartIndex++;
  }

  return bestThreeStarts;
};

var nums = [1, 2, 1, 2, 6, 7, 5, 1],
  k = 2;
var expected = [0, 3, 5];
var result = maxSumOfThreeSubarrays(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 1, 2, 1, 2, 1, 2, 1],
  k = 2;
var expected = [0, 2, 4];
var result = maxSumOfThreeSubarrays(nums, k);
console.log(result, result.join() === expected.join());
