// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int PivotIndex(int[] nums)
  {
    var leftSum = 0;
    var rightSum = 0;
    foreach (var num in nums)
    {
      rightSum += num;
    }

    for (var i = 0; i < nums.Length; i++)
    {
      rightSum -= nums[i];
      if (leftSum == rightSum) return i;
      leftSum += nums[i];
    }
    return -1;
  }
}

var nums = new int[] { 1, 7, 3, 6, 5, 6 };
var expected = 3;
var result = new Solution().PivotIndex(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 1, 2, 3 };
expected = -1;
result = new Solution().PivotIndex(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 2, 1, -1 };
expected = 0;
result = new Solution().PivotIndex(nums);
Console.WriteLine($"{result}, {result == expected}");
