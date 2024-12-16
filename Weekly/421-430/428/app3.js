/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSplits = function (nums) {
  const n = nums.length;
  const lcp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === j) {
        lcp[i][j] = n - i;
      } else if (nums[i] === nums[j]) {
        lcp[i][j] = 1 + lcp[i + 1][j + 1];
      }
    }
  }

  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = i; j < n - 1; j++) {
      if (lcp[0][i] >= i && i <= j - i + 1) {
        count++;
      } else if (lcp[i][j + 1] >= j - i + 1) {
        count++;
      }
    }
  }
  return count;
};

var nums = [1, 1, 2, 1];
var expected = 2;
var result = beautifulSplits(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4];
var expected = 0;
var result = beautifulSplits(nums);
console.log(result, result === expected);
