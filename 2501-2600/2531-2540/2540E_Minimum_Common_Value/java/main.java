// 2540. Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/
// T.C.: O(n)
// S.C.: O(1)

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums1 = { 1, 2, 3 };
    int[] nums2 = { 2, 4 };
    int expected = 2;
    int result = solution.getCommon(nums1, nums2);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums1 = new int[] { 1, 2, 3, 6 };
    nums2 = new int[] { 2, 3, 4, 5 };
    expected = 2;
    result = solution.getCommon(nums1, nums2);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int getCommon(int[] nums1, int[] nums2) {
    if (nums1[0] > nums2[nums2.length - 1] || nums1[nums1.length - 1] < nums2[0]) {
      return -1;
    }
    int index1 = 0;
    int index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
      if (nums1[index1] == nums2[index2]) {
        return nums1[index1];
      }
      if (nums1[index1] < nums2[index2]) {
        index1++;
      } else {
        index2++;
      }
    }
    return -1;
  }
}
