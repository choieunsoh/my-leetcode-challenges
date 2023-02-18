// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
class Solution {
  public int maxArea(int[] height) {
    int maxArea = 0;
    int left = 0;
    int right = height.length - 1;
    while (left < right) {
      final int minHeight = Math.min(height[left], height[right]);
      final int width = right - left;
      final int area = minHeight * width;
      maxArea = Math.max(maxArea, area);
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
  }
}