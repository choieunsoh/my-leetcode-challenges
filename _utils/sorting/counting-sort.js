var countingSort = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const counts = Array(max - min + 1).fill(0);

  for (const num of nums) {
    counts[num - min]++;
  }

  let i = 0;
  for (let j = 0; j < counts.length; j++) {
    while (counts[j]) {
      nums[i] = min + j;
      i++;
      counts[j]--;
    }
  }

  return nums;
};
