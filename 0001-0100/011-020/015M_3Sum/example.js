function threeSum(nums, target) {
  const result = [];
  for (let index = 0; index < nums.length - 2; index++) {
    const remain = target - nums[index];
    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === remain) {
        result.push([nums[index], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum < remain) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

var nums = [1, 3, 5, 7, 9, 11, 13, 15];
var target = 15;
var result = threeSum(nums, target);
console.log(result);

var nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
var target = 31;
var result = threeSum(nums, target);
console.log(result);
