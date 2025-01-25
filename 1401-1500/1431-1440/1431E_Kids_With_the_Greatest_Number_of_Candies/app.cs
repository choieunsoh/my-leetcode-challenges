// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public IList<bool> KidsWithCandies(int[] candies, int extraCandies)
  {
    var maxCandies = candies[0];
    for (var i = 1; i < candies.Length; i++)
    {
      if (candies[i] > maxCandies)
      {
        maxCandies = candies[i];
      }
    }

    var result = new bool[candies.Length];
    for (var i = 0; i < candies.Length; i++)
    {
      result[i] = candies[i] + extraCandies >= maxCandies;
    }
    return result;
  }
}

var candies = new int[] { 2, 3, 5, 1, 3 };
var extraCandies = 3;
var expected = new bool[] { true, true, true, false, true };
var result = new Solution().KidsWithCandies(candies, extraCandies);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");

candies = new int[] { 4, 2, 1, 1, 2 };
extraCandies = 1;
expected = new bool[] { true, false, false, false, false };
result = new Solution().KidsWithCandies(candies, extraCandies);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");

candies = new int[] { 12, 1, 12 };
extraCandies = 10;
expected = new bool[] { true, false, true };
result = new Solution().KidsWithCandies(candies, extraCandies);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");
