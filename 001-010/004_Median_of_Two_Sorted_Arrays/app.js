const findMedianSortedArrays = (nums1, nums2) => {
  //
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  let N = nums.length;
  if (N % 2 === 0) {
    return (nums[N / 2] + nums[N / 2 - 1]) / 2;
  } else {
    return nums[Math.floor(N / 2)];
  }
};

let nums1 = [3];
let nums2 = [-2, -1];

console.log(findMedianSortedArrays(nums1, nums2));
