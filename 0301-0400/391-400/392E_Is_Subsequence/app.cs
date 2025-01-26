// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public bool IsSubsequence(string s, string t)
  {
    if (s == t) return true;

    var sIndex = 0;
    var tIndex = 0;
    while (sIndex < s.Length && tIndex < t.Length)
    {
      if (s[sIndex] == t[tIndex])
      {
        sIndex++;
      }
      if (sIndex == s.Length) return true;
      tIndex++;
    }
    return sIndex == s.Length;
  }
}

var s = "abc";
var t = "ahbgdc";
var expected = true;
var result = new Solution().IsSubsequence(s, t);
Console.WriteLine($"{result}, {result == expected}");

s = "axc";
t = "ahbgdc";
expected = false;
result = new Solution().IsSubsequence(s, t);
Console.WriteLine($"{result}, {result == expected}");

s = "axc";
t = "axc";
expected = true;
result = new Solution().IsSubsequence(s, t);
Console.WriteLine($"{result}, {result == expected}");

s = "axc";
t = "";
expected = false;
result = new Solution().IsSubsequence(s, t);
Console.WriteLine($"{result}, {result == expected}");

s = "";
t = "axc";
expected = true;
result = new Solution().IsSubsequence(s, t);
Console.WriteLine($"{result}, {result == expected}");
