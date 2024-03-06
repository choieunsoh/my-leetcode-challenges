// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// T.C.: O(n)
// S.C.: O(1)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

// java main.java
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();

    ListNode head = new ListNode(3);
    head.next = new ListNode(0);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(-4);
    head.next.next.next.next = head.next;
    boolean expected = true;
    boolean result = solution.hasCycle(head);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;
    expected = true;
    result = solution.hasCycle(head);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    head = new ListNode(1);
    expected = false;
    result = solution.hasCycle(head);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {
  public boolean hasCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}