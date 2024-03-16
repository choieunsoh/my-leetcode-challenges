// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// T.C.: O(N log N)
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
  int minMeetingRooms(vector<vector<int>> &intervals)
  {
    vector<int> startIntervals;
    transform(intervals.begin(), intervals.end(), back_inserter(startIntervals), [](vector<int> interval)
              { return interval[0]; });
    sort(startIntervals.begin(), startIntervals.end());

    vector<int> endIntervals;
    transform(intervals.begin(), intervals.end(), back_inserter(endIntervals), [](vector<int> interval)
              { return interval[1]; });
    sort(endIntervals.begin(), endIntervals.end());

    int usedRoom = 0;
    int startIndex = 0;
    int endIndex = 0;
    while (startIndex < intervals.size())
    {
      if (startIntervals[startIndex] >= endIntervals[endIndex])
      {
        usedRoom--;
        endIndex++;
      }
      usedRoom++;
      startIndex++;
    }

    return usedRoom;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<vector<int>> intervals = {{0, 30}, {5, 10}, {15, 20}};
  int expected = 2;
  int result = Solution().minMeetingRooms(intervals);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  intervals = {{7, 10}, {2, 4}};
  expected = 1;
  result = Solution().minMeetingRooms(intervals);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  intervals = {{2, 11}, {6, 16}, {11, 16}};
  expected = 2;
  result = Solution().minMeetingRooms(intervals);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}