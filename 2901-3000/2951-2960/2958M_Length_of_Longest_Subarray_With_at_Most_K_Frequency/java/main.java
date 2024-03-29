// 2958. Length of Longest Subarray With at Most K Frequency
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
// T.C.: O(n)
// S.C.: O(n)

import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = { 1, 2, 3, 1, 2, 3, 1, 2 };
    int k = 2;
    long expected = 6;
    long result = solution.maxSubarrayLength(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    nums = new int[] { 1, 2, 1, 2, 1, 2, 1, 2 };
    k = 1;
    expected = 2;
    result = solution.maxSubarrayLength(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    nums = new int[] { 5, 5, 5, 5, 5, 5, 5 };
    k = 4;
    expected = 4;
    result = solution.maxSubarrayLength(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));
  }
}

class Solution {

  public int maxSubarrayLength(int[] nums, int k) {
    int result = 0;
    Map<Integer, Integer> freq = new HashMap<>();
    for (int left = 0, right = 0; right < nums.length; right++) {
      int rightNum = nums[right];
      freq.put(rightNum, freq.getOrDefault(rightNum, 0) + 1);
      while (freq.get(rightNum) > k) {
        int leftNum = nums[left];
        freq.put(leftNum, freq.get(leftNum) - 1);
        left++;
      }
      result = Math.max(result, right - left + 1);
    }

    return result;
  }
}
