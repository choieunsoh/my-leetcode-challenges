// 1669. Merge In Between Linked Lists
// https://leetcode.com/problems/merge-in-between-linked-lists/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
  ListNode *mergeInBetween(ListNode *list1, int a, int b, ListNode *list2)
  {
    ListNode *start = nullptr;
    ListNode *end = nullptr;
    ListNode *curr = list1;
    int index = 0;
    while (curr != nullptr && end == nullptr)
    {
      if (index == a - 1)
      {
        start = curr;
      }
      else if (index == b)
      {
        end = curr->next;
      }
      curr = curr->next;
      index++;
    }

    start->next = list2;
    curr = list2;
    while (curr->next != nullptr)
    {
      curr = curr->next;
    }
    curr->next = end;

    return list1;
  }

  vector<int> toVector(ListNode *head)
  {
    vector<int> result;
    ListNode *current = head;
    while (current != nullptr)
    {
      result.push_back(current->val);
      current = current->next;
    }
    return result;
  }

  void printVector(vector<int> &nums)
  {
    for (int i = 0; i < nums.size(); i++)
    {
      cout << nums[i] << " ";
    }
    cout << endl;
  }
};

// g++ -std=c++2a ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  ListNode *list1 = new ListNode(0);
  list1->next = new ListNode(1);
  list1->next->next = new ListNode(2);
  list1->next->next->next = new ListNode(3);
  list1->next->next->next->next = new ListNode(4);
  list1->next->next->next->next->next = new ListNode(5);
  ListNode *list2 = new ListNode(1000000);
  list2->next = new ListNode(1000001);
  list2->next->next = new ListNode(1000002);
  vector<int> expected = {0, 1, 2, 1000000, 1000001, 1000002, 5};
  ListNode *result = Solution().mergeInBetween(list1, 3, 4, list2);
  vector<int> resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  list1 = new ListNode(0);
  list1->next = new ListNode(1);
  list1->next->next = new ListNode(2);
  list1->next->next->next = new ListNode(3);
  list1->next->next->next->next = new ListNode(4);
  list1->next->next->next->next->next = new ListNode(5);
  list1->next->next->next->next->next->next = new ListNode(6);
  list2 = new ListNode(1000000);
  list2->next = new ListNode(1000001);
  list2->next->next = new ListNode(1000002);
  list2->next->next->next = new ListNode(1000003);
  list2->next->next->next->next = new ListNode(1000004);
  expected = {0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6};
  result = Solution().mergeInBetween(list1, 2, 5, list2);
  resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  return 0;
}