var twoSum = (nums, target) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (seen[remain] !== undefined) {
      return [seen[remain], i];
    }
    seen[nums[i]] = i;
  }
  return [];
};
var nums = [2, 7, 11, 15],
  target = 9;
(nums = [3, 2, 4]), (target = 6);
console.log(twoSum(nums, target));
