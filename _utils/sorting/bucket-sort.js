function bucketSort(nums) {
  const n = nums.length;

  // Find the maximum and minimum values in the array
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  // Calculate the range for each bucket
  const bucketRange = (max - min + 1) / nums.length;

  // Create an array of empty buckets
  const buckets = Array.from({ length: n }, () => []);

  // Place each element in the appropriate bucket
  for (const num of nums) {
    const bucketIndex = Math.floor((num - min) / bucketRange);
    buckets[bucketIndex].push(num);
  }

  // Sort each bucket individually (using any sorting algorithm)
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b); // Sorting in ascending order
  }

  return buckets.flat();
}

// Example usage
let unsortedArray = [4, 2, 8, 3, 1, 7, 6];
let sortedArray = bucketSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 6, 7, 8]
