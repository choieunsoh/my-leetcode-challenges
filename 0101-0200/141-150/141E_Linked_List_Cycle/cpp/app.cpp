// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
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
};

class Solution
{
public:
  bool hasCycle(ListNode *head)
  {
    ListNode *slow = head;
    ListNode *fast = head;
    while (fast != NULL && fast->next != NULL)
    {
      slow = slow->next;
      fast = fast->next->next;
      if (slow == fast)
      {
        return true;
      }
    }
    return false;
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  ListNode *head = new ListNode(3);
  head->next = new ListNode(0);
  head->next->next = new ListNode(2);
  head->next->next->next = new ListNode(-4);
  head->next->next->next->next = head->next;
  bool expected = true;
  bool result = Solution().hasCycle(head);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = head;
  expected = true;
  result = Solution().hasCycle(head);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  head = new ListNode(1);
  expected = false;
  result = Solution().hasCycle(head);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}