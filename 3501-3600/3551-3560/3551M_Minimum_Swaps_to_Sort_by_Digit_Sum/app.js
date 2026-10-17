// 3551. Minimum Swaps to Sort by Digit Sum
// https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum/description/
// T.C.: O(n log n + n log M)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length;
  const digitSum = new Array(n);
  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    digitSum[i] = sum;
  }

  const indices = Array.from({ length: n }, (_, i) => i);
  indices.sort((a, b) => {
    if (digitSum[a] !== digitSum[b]) {
      return digitSum[a] - digitSum[b];
    }
    return nums[a] - nums[b];
  });

  const targetPos = new Array(n);
  for (let pos = 0; pos < n; pos++) {
    targetPos[indices[pos]] = pos;
  }

  const visited = new Array(n).fill(false);
  let cycles = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      cycles++;
      let j = i;
      while (!visited[j]) {
        visited[j] = true;
        j = targetPos[j];
      }
    }
  }

  return n - cycles;
};

var nums = [37, 100];
var expected = 1;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [22, 14, 33, 7];
var expected = 0;
var result = minSwaps(nums);
console.log(result, result === expected);

var nums = [18, 43, 34, 16];
var expected = 2;
var result = minSwaps(nums);
console.log(result, result === expected);
