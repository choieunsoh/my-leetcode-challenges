// 2390. Removing Stars From a String
// https://leetcode.com/problems/removing-stars-from-a-string/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public string RemoveStars(string s)
  {
    var stack = new Stack<char>();
    for (var i = 0; i < s.Length; i++)
    {
      if (s[i] == '*')
      {
        stack.Pop();
      }
      else
      {
        stack.Push(s[i]);
      }
    }

    var result = new char[stack.Count];
    while (stack.Count > 0)
    {
      result[stack.Count - 1] = stack.Pop();
    }

    return new string(result);
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
