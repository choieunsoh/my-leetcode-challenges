// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int LongestSubarray(int[] nums)
  {
    var maxLength = 0;
    var left = 0;
    var right = 0;
    var zeroCount = 0;
    while (right < nums.Length)
    {
      if (nums[right] == 0) zeroCount++;
      if (zeroCount > 1)
      {
        if (nums[left++] == 0) zeroCount--;
      }

      maxLength = Math.Max(maxLength, right - left);
      right++;
    }
    return maxLength;
  }
}

var nums = new int[] { 1, 1, 0, 1 };
var expected = 3;
var result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 0, 1, 1, 1, 0, 1, 1, 0, 1 };
expected = 5;
result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0 };
expected = 6;
result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 1, 1, 1 };
expected = 2;
result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 1, 1, 0, 0, 1, 1, 1, 0, 1 };
expected = 4;
result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 0, 0, 0 };
expected = 0;
result = new Solution().LongestSubarray(nums);
Console.WriteLine($"{result}, {result == expected}");
