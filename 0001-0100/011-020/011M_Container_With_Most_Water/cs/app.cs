// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int MaxArea(int[] height)
  {
    var left = 0;
    var right = height.Length - 1;
    var maxArea = 0;
    while (left < right)
    {
      var area = Math.Min(height[left], height[right]) * (right - left);
      maxArea = Math.Max(maxArea, area);
      if (height[left] < height[right])
      {
        left++;
      }
      else
      {
        right--;
      }
    }
    return maxArea;
  }
}

var height = new int[] { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
var expected = 49;
var result = new Solution().MaxArea(height);
Console.WriteLine($"{result}, {result == expected}");

height = new int[] { 2, 3, 4, 5, 18, 17, 6 };
expected = 17;
result = new Solution().MaxArea(height);
Console.WriteLine($"{result}, {result == expected}");

height = new int[] { 1, 2, 3, 4, 5, 25, 24, 3, 4 };
expected = 24;
result = new Solution().MaxArea(height);
Console.WriteLine($"{result}, {result == expected}");
