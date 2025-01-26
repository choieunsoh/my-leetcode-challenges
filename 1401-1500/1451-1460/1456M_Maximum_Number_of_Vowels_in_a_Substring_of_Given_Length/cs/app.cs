// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int MaxVowels(string s, int k)
  {
    var vowelsCount = 0;
    for (var i = 0; i < k; i++)
    {
      if (IsVowel(s[i])) vowelsCount++;
      if (vowelsCount == k) return vowelsCount;
    }

    var maxVowels = vowelsCount;
    for (var i = k; i < s.Length; i++)
    {
      if (IsVowel(s[i - k])) vowelsCount--;
      if (IsVowel(s[i])) vowelsCount++;
      if (vowelsCount == k) return vowelsCount;
      maxVowels = Math.Max(maxVowels, vowelsCount);
    }

    return maxVowels;
  }

  private bool IsVowel(char ch) => ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
}

var s = "abciiidef";
var k = 3;
var expected = 3;
var result = new Solution().MaxVowels(s, k);
Console.WriteLine($"{result}, {result == expected}");

s = "aeiou";
k = 2;
expected = 2;
result = new Solution().MaxVowels(s, k);
Console.WriteLine($"{result}, {result == expected}");

s = "leetcode";
k = 3;
expected = 2;
result = new Solution().MaxVowels(s, k);
Console.WriteLine($"{result}, {result == expected}");

s = "a";
k = 1;
expected = 1;
result = new Solution().MaxVowels(s, k);
Console.WriteLine($"{result}, {result == expected}");
