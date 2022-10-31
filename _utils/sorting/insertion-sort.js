var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let current = i;
    while (current > 0 && nums[current] < nums[current - 1]) {
      [nums[current], nums[current - 1]] = [nums[current - 1], nums[current]];
      current--;
    }
  }
  return nums;
};

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = bubbleSort(nums);
console.log(result, result.join() === expected.join());
