// 394. Decode String
// https://leetcode.com/problems/decode-string/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public string DecodeString(string s)
  {
    var numberStack = new Stack<int>();
    var stringStack = new Stack<StringBuilder>();
    var currentString = new StringBuilder();
    var currentNumber = 0;

    foreach (char c in s)
    {
      if (char.IsDigit(c))
      {
        currentNumber = currentNumber * 10 + (c - '0');
      }
      else if (c == '[')
      {
        numberStack.Push(currentNumber);
        stringStack.Push(currentString);
        currentString = new StringBuilder();
        currentNumber = 0;
      }
      else if (c == ']')
      {
        var repeatTimes = numberStack.Pop();
        var temp = currentString.ToString();
        if (temp == "")
        {
          temp = currentNumber.ToString();
        }

        currentString = stringStack.Pop();
        for (int j = 0; j < repeatTimes; j++)
        {
          currentString.Append(temp);
        }
      }
      else
      {
        currentString.Append(c);
      }
    }

    return currentString.ToString();
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
