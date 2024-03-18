// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// T.C.: O(N * log(N))
// S.C.: O(N)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  int findMinArrowShots(vector<vector<int>> &points)
  {
    int arrows = 1;
    sort(points.begin(), points.end(), [](vector<int> &a, vector<int> &b)
         { return a[1] < b[1]; });
    int endPoint = points[0][1];
    for (int i = 1; i < points.size(); i++)
    {
      if (points[i][0] > endPoint)
      {
        arrows++;
        endPoint = points[i][1];
      }
    }
    return arrows;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<vector<int>> points = {{10, 16}, {2, 8}, {1, 6}, {7, 12}};
  int expected = 2;
  int result = Solution().findMinArrowShots(points);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  points = {{1, 2}, {3, 4}, {5, 6}, {7, 8}};
  expected = 4;
  result = Solution().findMinArrowShots(points);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  points = {{1, 2}, {2, 3}, {3, 4}, {4, 5}};
  expected = 2;
  result = Solution().findMinArrowShots(points);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}