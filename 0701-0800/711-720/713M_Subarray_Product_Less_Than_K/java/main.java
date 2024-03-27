// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/
// T.C.: O(n)
// S.C.: O(1)
class Solution {

  public int numSubarrayProductLessThanK(int[] nums, int k) {
    if (k <= 1) return 0;
    int result = 0;
    int left = 0;
    int product = 1;
    for (int right = 0; right < nums.length; right++) {
      product *= nums[right];
      while (product >= k) {
        product /= nums[left++];
      }
      result += right - left + 1;
    }
    return result;
  }
}
