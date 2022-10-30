var mergeSort = function (nums) {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  merge(nums, left, right);
  return nums;

  function merge(result, left, right) {
    let k = 0;
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result[k++] = left.shift();
      } else {
        result[k++] = right.shift();
      }
    }
    while (left.length) result[k++] = left.shift();
    while (right.length) result[k++] = right.shift();
  }
};

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

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = mergeSort(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = quickSort(nums);
console.log(result, result.join() === expected.join());
