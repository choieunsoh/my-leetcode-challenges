function heapSort(nums) {
  const n = nums.length;
  for (let i = (n >> 1) - 1; i >= 0; i--) {
    maxHeapify(nums, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    maxHeapify(nums, i, 0);
  }

  return nums;

  function maxHeapify(nums, heapSize, index) {
    let left = (index << 1) + 1;
    let right = left + 1;
    let largest = index;
    if (left < heapSize && nums[left] > nums[largest]) {
      largest = left;
    }
    if (right < heapSize && nums[right] > nums[largest]) {
      largest = right;
    }
    if (largest !== index) {
      [nums[index], nums[largest]] = [nums[largest], nums[index]];
      maxHeapify(nums, heapSize, largest);
    }
  }
}

// Example usage
let unsortedArray = [4, 2, 8, 3, 1, 7, 6];
let sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 6, 7, 8]
