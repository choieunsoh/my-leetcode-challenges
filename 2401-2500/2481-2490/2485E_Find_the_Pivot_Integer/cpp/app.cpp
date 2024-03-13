// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/
// T.C.: O(log n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int pivotInteger(int n)
  {
    int sumOfN = ((n + 1) * n) / 2;
    int left = 1;
    int right = n;
    while (left <= right)
    {
      int mid = left + (right - left) / 2;
      if (mid * mid < sumOfN)
      {
        left = mid + 1;
      }
      else
      {
        right = mid - 1;
      }
    }

    if (left * left == sumOfN)
    {
      return left;
    }
    return -1;
  }
};

// g++ cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  int n = 8;
  int expected = 6;
  int result = Solution().pivotInteger(n);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  n = 1;
  expected = 1;
  result = Solution().pivotInteger(n);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  n = 4;
  expected = -1;
  result = Solution().pivotInteger(n);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}