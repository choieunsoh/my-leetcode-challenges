var bubbleSort = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    if (!swapped) return nums;
  }
  return nums;
};

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = bubbleSort(nums);
console.log(result, result.join() === expected.join());
