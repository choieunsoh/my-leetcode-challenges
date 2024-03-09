// 2540. Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/
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
  int getCommon(vector<int> &nums1, vector<int> &nums2)
  {
    if (nums1[nums1.size() - 1] < nums2[0] || nums1[0] > nums2[nums2.size() - 1])
      return -1;

    int index1 = 0;
    int index2 = 0;
    while (index1 < nums1.size() && index2 < nums2.size())
    {
      if (nums1[index1] == nums2[index2])
      {
        return nums1[index1];
      }
      if (nums1[index1] < nums2[index2])
      {
        index1++;
      }
      else
      {
        index2++;
      }
    }
    return -1;
  }
};

// g++ -std=c++2a app.cpp -o ./app.exe && ./app
int main()
{
  vector<int> nums1 = {1, 2, 3, 4};
  vector<int> nums2 = {2, 4};
  int expected = 2;
  int result = Solution().getCommon(nums1, nums2);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums1 = {1, 2, 3, 6};
  nums2 = {2, 3, 4, 5};
  expected = 2;
  result = Solution().getCommon(nums1, nums2);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}