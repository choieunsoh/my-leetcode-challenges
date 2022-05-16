var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (cur > 0) {
      cur += nums[i];
    } else {
      cur = nums[i];
    }
    max = Math.max(max, cur);
    console.log(i, nums[i], cur, max);
  }

  return max;
};
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//nums = [5, 4, -1, 7, 8];
//nums = [8, -19, 5, -4, 20];
console.log(maxSubArray(nums));
