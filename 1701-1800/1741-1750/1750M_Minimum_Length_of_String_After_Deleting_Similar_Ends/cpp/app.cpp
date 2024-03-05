// 1750. Minimum Length of String After Deleting Similar Ends
// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int minimumLength(string s)
  {
    int left = 0;
    int right = s.length() - 1;

    while (left < right && s[left] == s[right])
    {
      char c = s[left];

      while (left <= right && s[left] == c)
      {
        left++;
      }

      while (right > left && s[right] == c)
      {
        right--;
      }
    }

    return right - left + 1;
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  string s = "ca";
  int expected = 2;
  int result = Solution().minimumLength(s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "cabaabac";
  expected = 0;
  result = Solution().minimumLength(s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "aabccabba";
  expected = 3;
  result = Solution().minimumLength(s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb";
  expected = 1;
  result = Solution().minimumLength(s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "abbbbbbbbbbbbbbbbbbba";
  expected = 0;
  result = Solution().minimumLength(s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}