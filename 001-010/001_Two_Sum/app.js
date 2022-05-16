const twoSumV1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
const twoSumV2 = (nums, target) => {
  if (nums.length < 2) return [];
  if (nums[0] + nums[1] === target) return [0, 1];

  const seen = [nums[0], nums[1]];
  for (let i = 2; i < nums.length; i++) {
    const remain = target - nums[i];
    const index = seen.findIndex((num) => num === remain);
    if (index !== -1) {
      return [i, index];
    }
    seen.push(nums[i]);
  }
  return [];
};
const twoSum = (nums, target) => {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (seen[remain] !== undefined) {
      return [i, seen[remain]];
    }
    seen[nums[i]] = i;
  }
  return [];
};

const num = [3, 4, 9, 2];
const target = 11;
console.log(twoSum(num, target));
//console.log(twoSumV2(num, target));
