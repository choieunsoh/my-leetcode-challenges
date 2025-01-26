// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public void MoveZeroes(int[] nums)
  {
    var nonZeroIndex = 0;
    var zeroIndex = 0;
    while (nonZeroIndex < nums.Length)
    {
      while (nonZeroIndex < nums.Length && nums[nonZeroIndex] == 0)
      {
        nonZeroIndex++;
      }

      if (nonZeroIndex == nums.Length) break;

      nums[zeroIndex++] = nums[nonZeroIndex++];
    }

    while (zeroIndex < nums.Length)
    {
      nums[zeroIndex++] = 0;
    }
  }
}

var nums = new int[] { 0, 1, 0, 3, 12 };
var expected = new int[] { 1, 3, 12, 0, 0 };
new Solution().MoveZeroes(nums);
Console.WriteLine($"{string.Join(',', nums)}, {nums.SequenceEqual(expected)}");

nums = new int[] { 0 };
expected = new int[] { 0 };
new Solution().MoveZeroes(nums);
Console.WriteLine($"{string.Join(',', nums)}, {nums.SequenceEqual(expected)}");
