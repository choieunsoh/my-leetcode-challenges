// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
// T.C.: O(n + m)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_set>
using namespace std;

class Solution
{
public:
  vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
  {
    if (nums1.size() < nums2.size())
    {
      return intersection(nums2, nums1);
    }
    unordered_set<int> set1;
    for (int num : nums1)
    {
      set1.insert(num);
    }

    unordered_set<int> set2;
    for (int num : nums2)
    {
      if (set1.find(num) != set1.end())
      {
        set2.insert(num);
      }
    }

    vector<int> result(set2.begin(), set2.end());
    return result;
  }
};

// g++ -std=c++2a app.cpp -o ./app.exe && ./app
int main()
{
  vector<int> nums1 = {1, 2, 2, 1};
  vector<int> nums2 = {2, 2};
  vector<int> expected = {2};
  vector<int> result = Solution().intersection(nums1, nums2);
  cout << (equal(result.begin(), result.end(), expected.begin()) ? "true" : "false") << endl;

  nums1 = {4, 9, 5};
  nums2 = {9, 4, 9, 8, 4};
  expected = {9, 4};
  result = Solution().intersection(nums1, nums2);
  cout << (equal(result.begin(), result.end(), expected.begin()) ? "true" : "false") << endl;

  return 0;
}