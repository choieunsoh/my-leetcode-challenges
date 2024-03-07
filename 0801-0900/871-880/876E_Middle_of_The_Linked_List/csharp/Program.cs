// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode MiddleNode(ListNode head)
    {
        ListNode slow = head;
        ListNode fast = head;
        while (slow != null && fast != null && fast.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

namespace Application
{
    class Program
    {
        static void Main(string[] args)
        {
            Solution solution = new Solution();

            ListNode head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = new ListNode(4);
            head.next.next.next.next = new ListNode(5);
            ListNode expected = head.next.next;
            ListNode result = solution.MiddleNode(head);
            Console.WriteLine(result == expected ? "true" : "false");

            head = new ListNode(1);
            head.next = new ListNode(2);
            head.next.next = new ListNode(3);
            head.next.next.next = new ListNode(4);
            head.next.next.next.next = new ListNode(5);
            head.next.next.next.next.next = new ListNode(6);
            expected = head.next.next.next;
            result = solution.MiddleNode(head);
            Console.WriteLine(result == expected ? "true" : "false");
        }
    }
}
