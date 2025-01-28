// 2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
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
  public int PairSum(ListNode head)
  {
    ListNode prev = null;
    var slow = head;
    var fast = head;
    while (fast != null && fast.next != null)
    {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    prev.next = null;

    var firstHalf = head;
    var secondHalf = ReverseList(slow);
    Console.WriteLine($"firstHalf: {firstHalf}, secondHalf: {secondHalf}");

    var maxSum = 0;
    while (firstHalf != null)
    {
      var sum = firstHalf.val + secondHalf.val;
      maxSum = Math.Max(maxSum, sum);
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    return maxSum;
  }

  private ListNode ReverseList(ListNode head)
  {
    ListNode prev = null;
    var curr = head;
    while (curr != null)
    {
      var next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
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

var head = ListNode.Create(new int[] { 5, 4, 2, 1 });
var expected = 6;
var result = new Solution().PairSum(head);
Console.WriteLine($"{result}, {result == expected}");

head = ListNode.Create(new int[] { 4, 2, 2, 3 });
expected = 7;
result = new Solution().PairSum(head);
Console.WriteLine($"{result}, {result == expected}");

head = ListNode.Create(new int[] { 1, 100000 });
expected = 100001;
result = new Solution().PairSum(head);
Console.WriteLine($"{result}, {result == expected}");
