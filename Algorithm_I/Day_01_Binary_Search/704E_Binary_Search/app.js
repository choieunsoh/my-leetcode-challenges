var counter = 0;
var search2 = (nums, target, left = 0, right = nums.length - 1) => {
  if (nums?.length === 0 || left > right) return -1;
  if (nums.length === 1) return nums[0] === target ? 1 : -1;

  let mid = Math.floor((right + left) / 2);
  if (nums[mid] === target) return mid;

  if (nums[mid] > target) {
    return search(nums, target, left, mid - 1);
  } else if (nums[mid] < target) {
    return search(nums, target, mid + 1, right);
  } else {
    return -1;
  }
};
var search = (nums, target, left = 0, right = nums.length - 1) => {
  if (nums?.length === 0 || left > right) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    console.log(left, mid, right);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
};

var nums = [2, 5];
var target = 5;
console.log(nums.join(" "), target);
console.log(search(nums, target));
