var quickSort = function (nums, left = 0, right = nums.length - 1) {
  if (left >= right) return;
  const pivotIndex = partition(nums, left, right);
  quickSort(nums, left, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, right);
  return nums;

  function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j <= right; j++) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
};

var quickSort2 = function (nums, left = 0, right = nums.length - 1) {
  function partition(nums, left, right) {
    const pivot = nums[right];
    while (left <= right) {
      while (nums[left] < pivot) left++;
      while (nums[right] > pivot) right--;
      if (left >= right) break;

      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return left;
  }

  var mid = partition(nums, left, right);
  if (left < mid - 1) {
    quickSort2(nums, left, mid - 1);
  }
  if (right > mid) {
    quickSort2(nums, mid, right);
  }

  return nums;
};

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = quickSort(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = quickSort2(nums);
console.log(result, result.join() === expected.join());
