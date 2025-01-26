// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public void MoveZeroes(int[] nums)
  {
    var index = 0;
    for (var nonZeroIndex = 0; nonZeroIndex < nums.Length; nonZeroIndex++)
    {
      if (nums[nonZeroIndex] != 0)
      {
        nums[index++] = nums[nonZeroIndex];
      }
    }

    for (var zeroIndex = index; zeroIndex < nums.Length; zeroIndex++)
    {
      nums[zeroIndex] = 0;
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
