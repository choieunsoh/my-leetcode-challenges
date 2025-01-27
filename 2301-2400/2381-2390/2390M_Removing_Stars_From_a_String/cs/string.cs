// 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public string RemoveStars(string s)
  {
    var sb = new StringBuilder();
    for (var i = 0; i < s.Length; i++)
    {
      if (s[i] == '*')
      {
        if (sb.Length > 0) sb.Length--;
      }
      else
      {
        sb.Append(s[i]);
      }
    }

    return sb.ToString();
  }
}

var s = "leet**cod*e";
var expected = "lecoe";
var result = new Solution().RemoveStars(s);
Console.WriteLine($"{result}, {result == expected}");

s = "erase*****";
expected = "";
result = new Solution().RemoveStars(s);
Console.WriteLine($"{result}, {result == expected}");

s = "abb*cdfg*****x*";
expected = "a";
result = new Solution().RemoveStars(s);
Console.WriteLine($"{result}, {result == expected}");
