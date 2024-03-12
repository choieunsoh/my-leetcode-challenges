// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// T.C.: O(n)
// S.C.: O(n)
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
  ListNode *removeZeroSumSublists(ListNode *head)
  {
    unordered_map<int, ListNode *> map;
    ListNode *dummy = new ListNode(0, head);
    ListNode *curr = dummy;
    int sum = 0;
    while (curr != nullptr)
    {
      sum += curr->val;
      map[sum] = curr;
      curr = curr->next;
    }

    curr = dummy;
    sum = 0;
    while (curr != nullptr)
    {
      sum += curr->val;
      curr->next = map[sum]->next;
      curr = curr->next;
    }

    return dummy->next;
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

// g++ -std=c++2a app.cpp -o ./app.exe && ./app
int main()
{
  // [1, 2, -3, 3, 1];
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(-3);
  head->next->next->next = new ListNode(3);
  head->next->next->next->next = new ListNode(1);
  vector<int> expected = {3, 1};
  ListNode *result = Solution().removeZeroSumSublists(head);
  vector<int> resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  // [1, 2, 3, -3, 4];
  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(-3);
  head->next->next->next->next = new ListNode(4);
  expected = {1, 2, 4};
  result = Solution().removeZeroSumSublists(head);
  resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  // [1, 2, 3, -3, -2];
  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(-3);
  head->next->next->next->next = new ListNode(-2);
  expected = {1};
  result = Solution().removeZeroSumSublists(head);
  resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  // [1, 2, 3, -3, -2, -1, 5];
  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(-3);
  head->next->next->next->next = new ListNode(-2);
  head->next->next->next->next->next = new ListNode(-1);
  head->next->next->next->next->next->next = new ListNode(5);
  expected = {5};
  result = Solution().removeZeroSumSublists(head);
  resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  return 0;
}