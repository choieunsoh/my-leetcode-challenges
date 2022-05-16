var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k--] = nums1[i--];
    } else if (nums2[j] > nums1[i]) {
      nums1[k--] = nums2[j--];
    }
  }
  while (i >= 0) {
    nums1[k--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
};
var nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
(nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);
console.log(merge(nums1, m, nums2, n).join(" "));
