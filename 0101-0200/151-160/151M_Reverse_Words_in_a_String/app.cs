// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public string ReverseWords(string s)
  {
    var words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
    var left = 0;
    var right = words.Length - 1;
    while (left < right)
    {
      (words[left], words[right]) = (words[right], words[left]);
      left++;
      right--;
    }
    return string.Join(' ', words);
  }
}

var s = "the sky is blue";
var expected = "blue is sky the";
var result = new Solution().ReverseWords(s);
Console.WriteLine($"{result}, {result == expected}");

s = "  hello world  ";
expected = "world hello";
result = new Solution().ReverseWords(s);
Console.WriteLine($"{result}, {result == expected}");

s = "a good   example";
expected = "example good a";
result = new Solution().ReverseWords(s);
Console.WriteLine($"{result}, {result == expected}");
