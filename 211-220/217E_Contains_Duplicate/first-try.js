/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = {};
  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = true;
    } else {
      return true;
    }
  }
  return false;
}

var nums = [1, 2, 3, 1];
console.log(nums.join(' '), containsDuplicate(nums));

nums = [1, 2, 3, 4];
console.log(nums.join(' '), containsDuplicate(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(nums.join(' '), containsDuplicate(nums));
