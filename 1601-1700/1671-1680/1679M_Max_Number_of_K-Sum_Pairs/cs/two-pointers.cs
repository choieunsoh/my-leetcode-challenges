// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n log n)
// S.C.: O(1)
public class Solution
{
  public int MaxOperations(int[] nums, int k)
  {
    Array.Sort(nums);
    var operations = 0;
    var left = 0;
    var right = nums.Length - 1;
    while (left < right)
    {
      var sum = nums[left] + nums[right];
      if (sum == k)
      {
        operations++;
        left++;
        right--;
      }
      else if (sum < k)
      {
        left++;
      }
      else
      {
        right--;
      }
    }
    return operations;
  }
}

var nums = new int[] { 1, 2, 3, 4 };
var k = 5;
var expected = 2;
var result = new Solution().MaxOperations(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 3, 1, 3, 4, 3 };
k = 6;
expected = 1;
result = new Solution().MaxOperations(nums, k);
Console.WriteLine($"{result}, {result == expected}");

nums = new int[] { 2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2 };
k = 3;
expected = 4;
result = new Solution().MaxOperations(nums, k);
Console.WriteLine($"{result}, {result == expected}");
