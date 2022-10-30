var mergeSort = function (nums) {
  if (nums.length === 1) return nums;
  const mid = Math.floor((nums.length - 1) / 2);
  const left = mergeSort(nums.slice(0, mid + 1));
  const right = mergeSort(nums.slice(mid + 1));
  merge(nums, left, right);
  return nums;

  function merge(result, left, right) {
    let k = 0;
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result[k++] = left[i++];
      } else {
        result[k++] = right[j++];
      }
    }
    while (i < left.length) result[k++] = left[i++];
    while (j < right.length) result[k++] = right[j++];
  }
};

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = mergeSort(nums);
console.log(result, result.join() === expected.join());
