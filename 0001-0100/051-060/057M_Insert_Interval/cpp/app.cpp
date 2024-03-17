// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  vector<vector<int>> insert(vector<vector<int>> &intervals, vector<int> &newInterval)
  {
    vector<vector<int>> result;
    for (int i = 0; i < intervals.size(); i++)
    {
      if (newInterval[1] < intervals[i][0])
      {
        result.push_back(newInterval);
        for (int j = i; j < intervals.size(); j++)
        {
          result.push_back(intervals[j]);
        }
        return result;
      }
      else if (newInterval[0] > intervals[i][1])
      {
        result.push_back(intervals[i]);
      }
      else
      {
        newInterval[0] = min(newInterval[0], intervals[i][0]);
        newInterval[1] = max(newInterval[1], intervals[i][1]);
      }
    }
    result.push_back(newInterval);
    return result;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<vector<int>> intervals = {{1, 3}, {6, 9}};
  vector<int> newInterval = {2, 5};
  vector<vector<int>> expected = {{1, 5}, {6, 9}};
  vector<vector<int>> result = Solution().insert(intervals, newInterval);
  cout << (expected == result ? "true" : "false") << endl;

  intervals = {{1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}};
  newInterval = {4, 8};
  expected = {{1, 2}, {3, 10}, {12, 16}};
  result = Solution().insert(intervals, newInterval);
  cout << (expected == result ? "true" : "false") << endl;

  intervals = {{1, 3}, {6, 9}};
  newInterval = {3, 5};
  expected = {{1, 5}, {6, 9}};
  result = Solution().insert(intervals, newInterval);
  cout << (expected == result ? "true" : "false") << endl;

  intervals = {{1, 3}, {6, 9}};
  newInterval = {9, 15};
  expected = {{1, 3}, {6, 15}};
  result = Solution().insert(intervals, newInterval);
  cout << (expected == result ? "true" : "false") << endl;

  intervals = {{1, 3}, {6, 9}};
  newInterval = {11, 15};
  expected = {{1, 3}, {6, 9}, {11, 15}};
  result = Solution().insert(intervals, newInterval);
  cout << (expected == result ? "true" : "false") << endl;

  return 0;
}