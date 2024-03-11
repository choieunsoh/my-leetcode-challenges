// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  string customSortString(string order, string s)
  {
    unordered_map<char, int> freq;
    for (char ch : s)
    {
      freq[ch]++;
    }

    string result = "";
    for (char ch : order)
    {
      while (freq[ch]-- > 0)
      {
        result += ch;
      }
    }

    for (auto &[ch, count] : freq)
    {
      while (count-- > 0)
      {
        result += ch;
      }
    }

    return result;
  }
};

// g++ -std=c++2a app.cpp -o ./app.exe && ./app
int main()
{
  string order = "cba";
  string s = "abcd";
  string expected = "cbad";
  string result = Solution().customSortString(order, s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  order = "bcafg";
  s = "abcd";
  expected = "bcad";
  result = Solution().customSortString(order, s);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}