var radixSort = function (nums) {
  // Find the maximum number to know the number of digits
  const maxNum = Math.max(...nums);
  // Loop through each digit of the numbers, starting from the least significant digit
  for (let digit = 1; Math.floor(maxNum / digit) > 0; digit *= 10) {
    // Create buckets for each digit, from 0 to 9
    const buckets = Array.from({ length: 10 }, () => []);
    // Place each number in the corresponding bucket based on the digit being examined
    for (let num of nums) {
      const bucketIndex = Math.floor((num / digit) % 10);
      buckets[bucketIndex].push(num);
    }
    // Flatten the buckets into a new array, in the order of 0 to 9
    nums = buckets.flat();
  }
  // Return the sorted array
  return nums;
};
