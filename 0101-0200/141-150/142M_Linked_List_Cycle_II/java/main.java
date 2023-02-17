// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/
class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  public static ListNode detectCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    ListNode cycle = null;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        cycle = slow;
        break;
      }
    }

    if (cycle == null) return null;

    while (cycle != head) {
      cycle = cycle.next;
      head = head.next;
    }
    return head;
  }
}
