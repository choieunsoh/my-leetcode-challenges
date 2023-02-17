import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// 15. 3Sum
// https://leetcode.com/problems/3sum/
class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    final int n = nums.length;
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    for (int i = 0; i < n - 2; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] == nums[i - 1]) continue;
      int j = i + 1;
      int k = n - 1;
      while (j < k) {
        final int sum = nums[i] + nums[j] + nums[k];
        if (sum == 0) {
          result.add(Arrays.asList(nums[i], nums[j], nums[k]));
          while (j < k && nums[j] == nums[j + 1]) j++;
          while (j < k && nums[k] == nums[k - 1]) k--;
          j++;
          k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
    return result;
  }
}