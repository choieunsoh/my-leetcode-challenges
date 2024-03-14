// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(1)

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = { 1, 0, 1, 0, 1 };
    int expected = 4;
    int result = solution.numSubarraysWithSum(nums, 2);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 0, 0, 0, 0, 0 };
    expected = 15;
    result = solution.numSubarraysWithSum(nums, 0);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 1, 0, 0, 1, 0, 1 };
    expected = 5;
    result = solution.numSubarraysWithSum(nums, 2);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int numSubarraysWithSum(int[] nums, int goal) {
    int currentCount = 0;
    int left = 0;
    int leftSum = 0;
    int right = 0;
    int rightSum = 0;
    for (int end = 0; end < nums.length; end++) {
      leftSum += nums[end];
      while (left < end && leftSum > goal) {
        leftSum -= nums[left++];
      }

      rightSum += nums[end];
      while (right < end && (rightSum > goal || (rightSum == goal && nums[right] == 0))) {
        rightSum -= nums[right++];
      }

      if (leftSum == goal) {
        currentCount += right - left + 1;
      }
    }

    return currentCount;
  }
}
