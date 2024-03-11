// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n log n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  string customSortString(string order, string s)
  {
    sort(begin(s), end(s), [&](char a, char b)
         { return order.find(a) < order.find(b); });
    return s;
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