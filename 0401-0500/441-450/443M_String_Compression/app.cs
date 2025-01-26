// 443. String Compression
// https://leetcode.com/problems/string-compression/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public int Compress(char[] chars)
  {
    var compressedIndex = 0;
    var charIndex = 0;

    while (charIndex < chars.Length)
    {
      var currentChar = chars[charIndex];
      var charCount = 0;

      while (charIndex < chars.Length && chars[charIndex] == currentChar)
      {
        charIndex++;
        charCount++;
      }

      chars[compressedIndex++] = currentChar;

      if (charCount > 1)
      {
        foreach (var ch in charCount.ToString())
        {
          chars[compressedIndex++] = ch;
        }
      }
    }

    return compressedIndex;
  }
}

var chars = new char[] { 'a', 'a', 'b', 'b', 'c', 'c', 'c' };
var expected = 6;
var result = new Solution().Compress(chars);
Console.WriteLine($"{result}, {result == expected}");

chars = new char[] { 'a' };
expected = 1;
result = new Solution().Compress(chars);
Console.WriteLine($"{result}, {result == expected}");

chars = new char[] { 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b' };
expected = 4;
result = new Solution().Compress(chars);
Console.WriteLine($"{result}, {result == expected}");

chars = new char[] { 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'a' };
expected = 4;
result = new Solution().Compress(chars);
Console.WriteLine($"{result}, {result == expected}");
