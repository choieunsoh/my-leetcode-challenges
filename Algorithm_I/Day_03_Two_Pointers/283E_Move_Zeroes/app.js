var moveZeroes = (nums) => {
  let N = nums.length;
  for (let i = 0; i < N - 1; i++) {
    let x = i + 1;
    if (nums[i] === 0) {
      while (x < N) {
        if (nums[x] === 0) {
          x++;
        } else {
          nums[i] = nums[x];
          nums[x] = 0;
          break;
        }
      }
    }
    console.log(i, x, nums.join(" "));
  }
};
var nums = [0, 1, 0, 3, 12];
console.log(nums.join(" "));
moveZeroes(nums);
