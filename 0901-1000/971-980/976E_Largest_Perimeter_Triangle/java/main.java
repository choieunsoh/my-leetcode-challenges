import java.util.Arrays;

// 976. Largest Perimeter Triangle
// https://leetcode.com/problems/largest-perimeter-triangle/
class Main {
  public static void main(String[] args) {
    int result = Solution.largestPerimeter(new int[] { 2, 1, 2 });
    int expected = 5;
    System.out.println(result == expected);
  }
}
class Solution {
  public static int largestPerimeter(int[] nums) {
    Arrays.sort(nums);
    for (int i = nums.length - 3; i >= 0; i--) {
      int large = nums[i + 2];
      int medium = nums[i + 1];
      int small = nums[i];
      if (small + medium > large) {
        return small + medium + large;
      }
    }
    return 0;
  }
}