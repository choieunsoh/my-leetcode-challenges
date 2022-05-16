var sortedSquares = (nums) => {
  let result = [];
  let l = 0;
  let r = nums.length - 1;
  let counter = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      result[i] = nums[l] ** 2;
      l++;
    } else {
      result[i] = nums[r] ** 2;
      r--;
    }
    counter++;
  }
  console.log(result.length, counter);
  return result;
};
var nums = [
  -19, -16, -15, -14, -7, -6, -5, -1, -1, -1, -1, 1, 2, 5, 5, 5, 5, 5, 7, 11,
  12, 16,
];
// 16 1 0 9 100
// 0 1 9 16 100
console.log(nums.join(" "));
console.log(sortedSquares(nums).join(" "));
