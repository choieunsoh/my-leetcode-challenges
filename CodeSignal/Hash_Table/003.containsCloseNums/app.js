// containsCloseNums
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsCloseNums(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      const j = map.get(num);
      if (i - j <= k) return true;
    }
    map.set(num, i);
  }
  return false;
}

var nums = [0, 1, 2, 3, 5, 2],
  k = 3;
var expected = true;
var result = containsCloseNums(nums, k);
console.log(result, result === expected);

var nums = [0, 1, 2, 3, 5, 2],
  k = 2;
var expected = false;
var result = containsCloseNums(nums, k);
console.log(result, result === expected);
