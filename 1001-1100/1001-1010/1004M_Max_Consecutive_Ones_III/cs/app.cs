// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int LongestOnes(int[] nums, int k)
  {
    var left = 0;
    var right = 0;
    var zeroCount = 0;
    while (right < nums.Length)
    {
      if (nums[right++] == 0) zeroCount++;
      if (zeroCount > k)
      {
        if (nums[left++] == 0) zeroCount--;
      }
    }
    return right - left;
  }
}

var nums = new int[] { 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 };
var k = 2;
var expected = 6;
var result = new Solution().LongestOnes(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1 };
k = 3;
expected = 10;
result = new Solution().LongestOnes(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 0, 0, 1, 1, 1, 0, 0 };
k = 0;
expected = 3;
result = new Solution().LongestOnes(nums, k);
Console.WriteLine($"{result}, {result == expected}");
