// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public string ReverseVowels(string s)
  {
    var vowels = new HashSet<char> { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
    var chars = s.ToCharArray();
    var left = 0;
    var right = chars.Length - 1;
    while (left < right)
    {
      while (left < right && !vowels.Contains(chars[left]))
      {
        left++;
      }
      while (left < right && !vowels.Contains(chars[right]))
      {
        right--;
      }
      (chars[left], chars[right]) = (chars[right], chars[left]);
      left++;
      right--;
    }
    return new string(chars);
  }
}

var s = "hello";
var expected = "holle";
var result = new Solution().ReverseVowels(s);
Console.WriteLine($"{result}, {expected == result}");

s = "IceCreAm";
expected = "AceCreIm";
result = new Solution().ReverseVowels(s);
Console.WriteLine($"{result}, {expected == result}");

s = "leetcode";
expected = "leotcede";
result = new Solution().ReverseVowels(s);
Console.WriteLine($"{result}, {expected == result}");
