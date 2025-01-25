// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// T.C.: O(n)
// S.C: O(n)
public class Solution
{
  public int[] ProductExceptSelf(int[] nums)
  {
    var n = nums.Length;
    var result = new int[n];
    var leftProducts = new int[n];
    var rightProducts = new int[n];
    var zeroCount = 0;

    leftProducts[0] = 1;
    rightProducts[n - 1] = 1;

    for (var i = 1; i < n; i++)
    {
      if (nums[i] == 0)
      {
        zeroCount++;
      }
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    if (zeroCount > 1) return new int[n];

    for (var j = n - 2; j >= 0; j--)
    {
      rightProducts[j] = rightProducts[j + 1] * nums[j + 1];
    }

    for (int i = 0; i < n; i++)
    {
      result[i] = leftProducts[i] * rightProducts[i];
    }
    return result;
  }
}

var nums = new int[] { 1, 2, 3, 4 };
var expected = new int[] { 24, 12, 8, 6 };
var result = new Solution().ProductExceptSelf(nums);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");

nums = new int[] { -1, 1, 0, -3, 3 };
expected = new int[] { 0, 0, 9, 0, 0 };
result = new Solution().ProductExceptSelf(nums);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");

nums = new int[] { -1, 0, 0, -3, 3 };
expected = new int[] { 0, 0, 0, 0, 0 };
result = new Solution().ProductExceptSelf(nums);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");
