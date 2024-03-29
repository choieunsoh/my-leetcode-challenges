// 2962. Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// T.C.: O(n)
// S.C.: O(1)

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = { 1, 3, 2, 3, 3 };
    int k = 2;
    long expected = 6;
    long result = solution.countSubarrays(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    nums = new int[] { 1, 4, 2, 1 };
    k = 3;
    expected = 0;
    result = solution.countSubarrays(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    nums = new int[] { 2, 2, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 1, 1, 2, 3, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3 };
    k = 5;
    expected = 31;
    result = solution.countSubarrays(nums, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));
  }
}

class Solution {

  public long countSubarrays(int[] nums, int k) {
    int maxElement = 0;
    for (int num : nums) {
      maxElement = Math.max(maxElement, num);
    }
    long result = 0;
    int left = 0, maxElementsInWindow = 0;

    for (int right = 0; right < nums.length; right++) {
      if (nums[right] == maxElement) {
        maxElementsInWindow++;
      }
      while (k == maxElementsInWindow) {
        if (nums[left] == maxElement) {
          maxElementsInWindow--;
        }
        left++;
      }
      result += left;
    }

    return result;
  }
}
