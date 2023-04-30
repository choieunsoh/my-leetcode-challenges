function findZigZagSequence(nums) {
  //Enter your code here
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let left = (n - 1) >> 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums.join(' ');
}

var nums = [1, 2, 3, 4, 5, 6, 7];
var expected = '1 2 3 7 6 5 4';
var result = findZigZagSequence(nums);
console.log(result, result === expected);
