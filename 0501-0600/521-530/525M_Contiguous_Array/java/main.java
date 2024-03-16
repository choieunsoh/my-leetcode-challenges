// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// T.C.: O(n)
// S.C.: O(n)

// java main.java

import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = { 0, 1 };
    int expected = 2;
    int result = solution.findMaxLength(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 0, 1, 0 };
    expected = 2;
    result = solution.findMaxLength(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 1, 1, 0, 0, 1, 1, 0, 1, 1 };
    expected = 6;
    result = solution.findMaxLength(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int findMaxLength(int[] nums) {
    int maxLength = 0;
    int count = 0;
    Map<Integer, Integer> map = new HashMap<>();
    map.put(0, -1);
    for (int index = 0; index < nums.length; index++) {
      count += nums[index] == 1 ? 1 : -1;
      if (map.containsKey(count)) {
        maxLength = Math.max(maxLength, index - map.get(count));
      } else {
        map.put(count, index);
      }
    }

    return maxLength;
  }
}
