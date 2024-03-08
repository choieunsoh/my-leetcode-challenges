// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int findCenter(vector<vector<int>> &edges)
  {
    if (edges[0][0] == edges[1][0] || edges[1][1] == edges[0][0])
      return edges[0][0];
    return edges[0][1];
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  vector<vector<int>> edges = {{1, 2}, {2, 3}, {4, 2}};
  int expected = 2;
  int result = Solution().findCenter(edges);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  edges = {{1, 2}, {5, 1}, {1, 3}, {1, 4}};
  expected = 1;
  result = Solution().findCenter(edges);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  edges = {
      {1, 18},
      {18, 2},
      {3, 18},
      {18, 4},
      {18, 5},
      {6, 18},
      {18, 7},
      {18, 8},
      {18, 9},
      {18, 10},
      {18, 11},
      {12, 18},
      {18, 13},
      {18, 14},
      {15, 18},
      {16, 18},
      {17, 18},
  };
  expected = 18;
  result = Solution().findCenter(edges);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}