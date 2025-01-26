// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public bool IncreasingTriplet(int[] nums)
  {
    var n = nums.Length;
    var smallest = int.MaxValue;
    var small = int.MaxValue;
    foreach (var num in nums)
    {
      if (num <= smallest)
      {
        smallest = num;
      }
      else if (num <= small)
      {
        small = num;
      }
      else
      {
        return true;
      }
    }
    return false;
  }
}

var nums = new int[] { 1, 2, 3, 4, 5 };
var expected = true;
var result = new Solution().IncreasingTriplet(nums);
Console.WriteLine($"{result}, {(result == expected ? "PASS" : "FAIL!!")}");

nums = new int[] { 5, 4, 3, 2, 1 };
expected = false;
result = new Solution().IncreasingTriplet(nums);
Console.WriteLine($"{result}, {(result == expected ? "PASS" : "FAIL!!")}");

nums = new int[] { 2, 1, 5, 0, 4, 6 };
expected = true;
result = new Solution().IncreasingTriplet(nums);
Console.WriteLine($"{result}, {(result == expected ? "PASS" : "FAIL!!")}");

nums = new int[] { 20, 100, 10, 12, 5, 13 };
expected = true;
result = new Solution().IncreasingTriplet(nums);
Console.WriteLine($"{result}, {(result == expected ? "PASS" : "FAIL!!")}");

nums = new int[] { 2, 4, -2, -3 };
expected = false;
result = new Solution().IncreasingTriplet(nums);
Console.WriteLine($"{result}, {(result == expected ? "PASS" : "FAIL!!")}");
