// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int target = 7;
    int nums[] = { 2, 3, 1, 2, 4, 3 };
    int expected = 2;
    int result = solution.minSubArrayLen(target, nums);
    System.out.printf("%d %s\n", result, result == expected);

    target = 4;
    nums = new int[] { 1, 4, 4 };
    expected = 1;
    result = solution.minSubArrayLen(target, nums);
    System.out.printf("%d %s\n", result, result == expected);

    target = 11;
    nums = new int[] { 1, 1, 1, 1, 1, 1, 1, 1 };
    expected = 0;
    result = solution.minSubArrayLen(target, nums);
    System.out.printf("%d %s\n", result, result == expected);

    target = 213;
    nums = new int[] { 12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12 };
    expected = 8;
    result = solution.minSubArrayLen(target, nums);
    System.out.printf("%d %s\n", result, result == expected);
  }
}

class Solution {
  public int minSubArrayLen(int target, int[] nums) {
    final int n = nums.length;
    int min = Integer.MAX_VALUE;
    int left = 0;
    int sum = 0;
    for (int right = 0; right < n; right++) {
      sum += nums[right];
      while (sum >= target) {
        min = Math.min(min, right - left + 1);
        sum -= nums[left++];
      }
    }
    return min == Integer.MAX_VALUE ? 0 : min;
  }
}