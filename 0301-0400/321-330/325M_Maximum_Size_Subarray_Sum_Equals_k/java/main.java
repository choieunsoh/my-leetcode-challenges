// 325. Maximum Size Subarray Sum Equals k
// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
// T.C.: O(N)
// S.C.: O(N)

// java main.java

import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = { 1, -1, 5, -2, 3 };
    int k = 3;
    int expected = 4;
    int result = solution.maxSubArrayLen(nums, k);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { -2, -1, 2, 1 };
    k = 1;
    expected = 2;
    result = solution.maxSubArrayLen(nums, k);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 1, 0, -1 };
    k = -1;
    expected = 2;
    result = solution.maxSubArrayLen(nums, k);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int maxSubArrayLen(int[] nums, int k) {
    int maxLength = 0;
    int prefixSum = 0;
    Map<Integer, Integer> map = new HashMap<>();
    for (int index = 0; index < nums.length; index++) {
      prefixSum += nums[index];
      if (prefixSum == k) {
        maxLength = index + 1;
      }
      if (map.containsKey(prefixSum - k)) {
        maxLength = Math.max(maxLength, index - map.get(prefixSum - k));
      }
      if (!map.containsKey(prefixSum)) {
        map.put(prefixSum, index);
      }
    }

    return maxLength;
  }
}
