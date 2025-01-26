// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public int MaxOperations(int[] nums, int k)
  {
    var operations = 0;
    var numCounts = new Dictionary<int, int>();
    foreach (var num in nums)
    {
      var complement = k - num;
      if (numCounts.ContainsKey(complement))
      {
        operations++;
        if (--numCounts[complement] == 0)
        {
          numCounts.Remove(complement);
        }
      }
      else
      {
        numCounts[num] = numCounts.GetValueOrDefault(num, 0) + 1;
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
