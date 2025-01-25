// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/
// T.C.: O(n)
// S.C: O(1)
public class Solution
{
  public int[] ProductExceptSelf(int[] nums)
  {
    var n = nums.Length;
    var result = new int[n];
    var zeroCount = 0;
    result[0] = 1;

    for (var i = 1; i < n; i++)
    {
      if (nums[i] == 0)
      {
        zeroCount++;
      }
      result[i] = result[i - 1] * nums[i - 1];
    }

    if (zeroCount > 1) return new int[n];

    var rightProduct = 1;
    for (var j = n - 1; j >= 0; j--)
    {
      result[j] *= rightProduct;
      rightProduct *= nums[j];
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
