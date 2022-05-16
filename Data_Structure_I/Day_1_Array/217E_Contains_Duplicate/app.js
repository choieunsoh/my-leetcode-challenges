var containsDuplicate = function (nums) {
  const map = {};
  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = true;
    } else {
      return true;
    }
  }
  return false;
};
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

var nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
