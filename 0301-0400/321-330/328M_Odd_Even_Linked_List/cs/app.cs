// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/
// T.C.: O(n)
// S.C: O(1)
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
  public ListNode OddEvenList(ListNode head)
  {
    if (head == null || head.next == null || head.next.next == null) return head;

    var odd = head;
    var even = head.next;
    var evenHead = even;
    while (even != null && even.next != null)
    {
      odd.next = odd.next.next;
      even.next = even.next.next;
      odd = odd.next;
      even = even.next;
    }
    odd.next = evenHead;
    return head;
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

  public static ListNode Create(int[] nums)
  {
    if (nums.Length == 0) return null;

    var head = new ListNode(nums[0]);
    var current = head;
    for (var i = 1; i < nums.Length; i++)
    {
      current.next = new ListNode(nums[i]);
      current = current.next;
    }

    return head;
  }

  public bool Equals(ListNode other)
  {
    var head = this;
    while (head != null)
    {
      if (head.val != other.val) return false;
      head = head.next;
      other = other.next;
    }
    return true;
  }

  public int[] ToArray()
  {
    var result = new List<int>();
    var head = this;
    while (head != null)
    {
      result.Add(head.val);
      head = head.next;
    }
    return result.ToArray();
  }

  override public string ToString()
  {
    return string.Join(", ", ToArray());
  }
}

var head = ListNode.Create(new int[] { 1, 2, 3, 4, 5 });
var expected = ListNode.Create(new int[] { 1, 3, 5, 2, 4 });
var result = new Solution().OddEvenList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");

head = ListNode.Create(new int[] { 2, 1, 3, 5, 6, 4, 7 });
expected = ListNode.Create(new int[] { 2, 3, 6, 7, 1, 5, 4 });
result = new Solution().OddEvenList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");

head = ListNode.Create(new int[0]);
expected = ListNode.Create(new int[0]);
result = new Solution().OddEvenList(head);
Console.WriteLine($"{result}, {result == null}");

head = ListNode.Create(new int[] { 2 });
expected = ListNode.Create(new int[] { 2 });
result = new Solution().OddEvenList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");

head = ListNode.Create(new int[] { 2, 3 });
expected = ListNode.Create(new int[] { 2, 3 });
result = new Solution().OddEvenList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");
