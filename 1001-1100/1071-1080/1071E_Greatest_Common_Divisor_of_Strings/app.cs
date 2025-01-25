// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/
// T.C.: O(m+n)
// S.C.: O(m+n)
public class Solution
{
  public string GcdOfStrings(string str1, string str2)
  {
    if (str1 + str2 != str2 + str1) return "";
    var gcd = Gcd(str1.Length, str2.Length);
    return str1.Substring(0, gcd);
  }

  private int Gcd(int a, int b)
  {
    while (b != 0)
    {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}

var str1 = "ABCABC";
var str2 = "ABC";
var expected = "ABC";
var result = new Solution().GcdOfStrings(str1, str2);
Console.WriteLine($"{result}, {result == expected}");

str1 = "ABABAB";
str2 = "ABAB";
expected = "AB";
result = new Solution().GcdOfStrings(str1, str2);
Console.WriteLine($"{result}, {result == expected}");

str1 = "LEET";
str2 = "CODE";
expected = "";
result = new Solution().GcdOfStrings(str1, str2);
Console.WriteLine($"{result}, {result == expected}");
