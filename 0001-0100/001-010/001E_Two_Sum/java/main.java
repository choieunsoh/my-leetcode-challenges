import java.util.Arrays;
import java.util.HashMap;

// 1. Two Sum
// https://leetcode.com/problems/two-sum/
class Main {
  public static void main(String[] args) {
    int[] nums = new int[] { 2, 7, 11, 15 };
    int target = 9;
    int[] expected = new int[] { 0, 1 };
    int[] result = Solution.twoSum(nums, target);
    System.out.println(Arrays.equals(result, expected));

    nums = new int[] { 3, 2, 4 };
    target = 6;
    expected = new int[] { 1, 2 };
    result = Solution.twoSum(nums, target);
    System.out.println(Arrays.equals(result, expected));

    nums = new int[] { 3, 3 };
    target = 6;
    expected = new int[] { 0, 1 };
    result = Solution.twoSum(nums, target);
    System.out.println(Arrays.equals(result, expected));
  }
}

class Solution {
  public static int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      final int num = nums[i];
      final int remain = target - num;
      if (map.containsKey(remain)) {
        final int index = map.get(remain);
        return new int[] { index, i };
      } else {
        map.put(num, i);
      }
    }

    return new int[] { -1, -1 };
  }
}