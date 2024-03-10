// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// T.C.: O(n + m)
// S.C.: O(n)

// java main.java

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums1 = { 1, 2, 2, 1 };
    int[] nums2 = { 2, 2 };
    int[] expected = { 2 };
    int[] result = solution.intersection(nums1, nums2);
    System.out.println(result + " " + (Arrays.equals(expected, result) ? "true" : "false"));

    nums1 = new int[] { 4, 9, 5 };
    nums2 = new int[] { 9, 4, 9, 8, 4 };
    expected = new int[] { 4, 9 };
    result = solution.intersection(nums1, nums2);
    System.out.println(result + " " + (Arrays.equals(expected, result) ? "true" : "false"));
  }
}

class Solution {

  public int[] intersection(int[] nums1, int[] nums2) {
    if (nums1.length < nums2.length) {
      return this.intersection(nums2, nums1);
    }
    Set<Integer> set1 = new HashSet<>();
    Set<Integer> set2 = new HashSet<>();
    for (int num : nums1) {
      set1.add(num);
    }
    for (int num : nums2) {
      if (set1.contains(num)) {
        set2.add(num);
      }
    }
    int[] result = new int[set2.size()];
    int index = 0;
    for (int num : set2) {
      result[index++] = num;
    }
    return result;
  }
}
