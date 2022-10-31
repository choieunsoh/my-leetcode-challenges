var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
  }
  return nums;
};

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = bubbleSort(nums);
console.log(result, result.join() === expected.join());
