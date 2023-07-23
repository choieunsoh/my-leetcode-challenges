/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  const rightFreq = new Map();
  for (const num of nums) {
    const count = rightFreq.get(num) ?? 0;
    rightFreq.set(num, count + 1);
  }

  const n = nums.length;
  const leftFreq = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let count = leftFreq.get(num) ?? 0;
    leftFreq.set(num, count + 1);
    count = rightFreq.get(num) ?? 0;
    if (count === 1) {
      rightFreq.delete(num);
    } else {
      rightFreq.set(num, count - 1);
    }

    if (rightFreq.has(num) && leftFreq.has(num)) {
      const left = leftFreq.get(num) * 2 > i + 1;
      const right = rightFreq.get(num) * 2 > n - i - 1;
      if (left && right) {
        return i;
      }
    }
  }

  return -1;
};

var nums = [1, 2, 2, 2];
var expected = 2;
var result = minimumIndex(nums);
console.log(result, result === expected);

var nums = [2, 1, 3, 1, 1, 1, 7, 1, 2, 1];
var expected = 4;
var result = minimumIndex(nums);
console.log(result, result === expected);

var nums = [3, 3, 3, 3, 7, 2, 2];
var expected = -1;
var result = minimumIndex(nums);
console.log(result, result === expected);
