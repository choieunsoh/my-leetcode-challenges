var bubbleSort = function (nums) {
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = bubbleSort(nums.slice(0, mid));
  const right = bubbleSort(nums.slice(mid));
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

var nums = [2, 5, 3, 1, 4];
var expected = [1, 2, 3, 4, 5];
var result = bubbleSort(nums);
console.log(result, result.join() === expected.join());
