// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public double FindMaxAverage(int[] nums, int k)
  {
    var sum = 0;
    for (var i = 0; i < k; i++)
    {
      sum += nums[i];
    }

    var maxAverage = sum / (double)k;
    for (var i = k; i < nums.Length; i++)
    {
      sum += nums[i] - nums[i - k];
      maxAverage = Math.Max(maxAverage, sum / (double)k);
    }

    return Math.Round(maxAverage, 5);
  }
}

var nums = new int[] { 1, 12, -5, -6, 50, 3 };
var k = 4;
var expected = 12.75;
var result = new Solution().FindMaxAverage(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 5 };
k = 1;
expected = 5.0;
result = new Solution().FindMaxAverage(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] {
    -6662, 5432, -8558, -8935, 8731, -3083, 4115, 9931, -4006, -3284, -3024,
    1714, -2825, -2374, -2750, -959, 6516, 9356, 8040, -2169, -9490, -3068,
    6299, 7823, -9767, 5751, -7897, 6680, -1293, -3486, -6785, 6337, -9158,
    -4183, 6240, -2846, -2588, -5458, -9576, -1501, -908, -5477, 7596, -8863,
    -4088, 7922, 8231, -4928, 7636, -3994, -243, -1327, 8425, -3468, -4218,
    -364, 4257, 5690, 1035, 6217, 8880, 4127, -6299, -1831, 2854, -4498, -6983,
    -677, 2216, -1938, 3348, 4099, 3591, 9076, 942, 4571, -4200, 7271, -6920,
    -1886, 662, 7844, 3658, -6562, -2106, -296, -3280, 8909, -8352, -9413, 3513,
    1352, -8825,
};
k = 90;
expected = 37.25556;
result = new Solution().FindMaxAverage(nums, k);
Console.WriteLine($"{result}, {result == expected}");
