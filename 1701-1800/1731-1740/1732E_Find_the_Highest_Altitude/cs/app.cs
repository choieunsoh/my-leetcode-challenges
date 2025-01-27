// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int LargestAltitude(int[] gain)
  {
    var maxAltitude = 0;
    var currentAltitude = 0;
    for (var i = 0; i < gain.Length; i++)
    {
      currentAltitude += gain[i];
      if (currentAltitude > maxAltitude) maxAltitude = currentAltitude;
    }
    return maxAltitude;
  }
}

var gain = new int[] { -5, 1, 5, 0, -7 };
var expected = 1;
var result = new Solution().LargestAltitude(gain);
Console.WriteLine($"{result}, {result == expected}");

gain = new int[] { -4, -3, -2, -1, 4, 3, 2 };
expected = 0;
result = new Solution().LargestAltitude(gain);
Console.WriteLine($"{result}, {result == expected}");
