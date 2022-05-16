var twoSum = (numbers, target) => {
  const nums = {};
  for (let i = 0; i < numbers.length; i++) {
    const remain = target - numbers[i];
    if (nums[remain] !== undefined) {
      return [nums[remain], i + 1];
    } else {
      nums[numbers[i]] = i + 1;
    }
  }
  return [];
};
var numbers = [2, 7, 11, 15],
  target = 9;
var numbers = [2, 3, 4],
  target = 6;
var numbers = [-1, 0],
  target = -1;
console.log(numbers, target);
console.log(twoSum(numbers, target));
