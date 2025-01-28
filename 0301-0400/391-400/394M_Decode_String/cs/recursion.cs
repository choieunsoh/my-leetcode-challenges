// 394. Decode String
// https://leetcode.com/problems/decode-string/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  private int index = 0;

  public string DecodeString(string s)
  {
    return Decode(s);
  }

  private string Decode(string s)
  {
    var result = new StringBuilder();
    while (index < s.Length && s[index] != ']')
    {
      if (!char.IsDigit(s[index]))
      {
        result.Append(s[index++]);
      }
      else
      {
        int k = 0;
        // build k while next character is a digit
        while (index < s.Length && char.IsDigit(s[index]))
        {
          k = k * 10 + (s[index++] - '0');
        }
        // ignore the opening bracket '['
        index++;
        var decodedString = Decode(s);
        // ignore the closing bracket ']'
        index++;
        // build k[decodedString] and append to the result
        while (k-- > 0)
        {
          result.Append(decodedString);
        }
      }
    }
    return result.ToString();
  }
}


var s = "3[a]2[bc]";
var expected = "aaabcbc";
var result = new Solution().DecodeString(s);
Console.WriteLine($"{result}, {result == expected}");

s = "3[a2[c]]";
expected = "accaccacc";
result = new Solution().DecodeString(s);
Console.WriteLine($"{result}, {result == expected}");

s = "2[abc]3[cd]ef";
expected = "abcabccdcdcdef";
result = new Solution().DecodeString(s);
Console.WriteLine($"{result}, {result == expected}");
