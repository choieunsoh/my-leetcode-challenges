var searchInsert = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log(l, mid, r, nums[mid], target);
    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

var nums = [1, 3, 5, 6];
var target = 7;
console.log(nums.join(" "), target);
var x = searchInsert(nums, target);
var xx = nums.splice(x, 0, target);
console.log(x, nums);
