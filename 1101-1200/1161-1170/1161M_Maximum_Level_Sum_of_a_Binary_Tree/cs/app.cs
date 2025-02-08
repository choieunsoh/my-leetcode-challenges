// 1161. Maximum Level Sum of a Binary Tree
// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class TreeNode
{
  public int val;
  public TreeNode left;
  public TreeNode right;
  public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
  {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

public class Solution
{
  public int MaxLevelSum(TreeNode root)
  {
    var level = 0;
    var minLevel = 0;
    var maxSum = int.MinValue;
    var queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    while (queue.Count > 0)
    {
      level++;
      var count = queue.Count;
      var sum = 0;
      for (var i = 0; i < count; i++)
      {
        var node = queue.Dequeue();
        sum += node.val;
        if (node.left != null)
        {
          queue.Enqueue(node.left);
        }
        if (node.right != null)
        {
          queue.Enqueue(node.right);
        }
      }
      if (sum > maxSum)
      {
        maxSum = sum;
        minLevel = level;
      }
    }
    return minLevel;
  }
}

// [1, 7, 0, 7, -8]
var root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(0);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(-8);
var expected = 2;
var result = new Solution().MaxLevelSum(root);
Console.WriteLine($"{result}, {result == expected}");

// [989, null, 10250, 98693, -89388, null, null, null, -32127]
root = new TreeNode(989);
root.right = new TreeNode(10250);
root.right.left = new TreeNode(98693);
root.right.right = new TreeNode(-89388);
root.right.right.right = new TreeNode(-32127);
expected = 2;
result = new Solution().MaxLevelSum(root);
Console.WriteLine($"{result}, {result == expected}");

// [-100,-200,-300,-20,-5,-10,null]
root = new TreeNode(-100);
root.left = new TreeNode(-200);
root.right = new TreeNode(-300);
root.left.left = new TreeNode(-20);
root.left.right = new TreeNode(-5);
root.right.left = new TreeNode(-10);
expected = 3;
result = new Solution().MaxLevelSum(root);
Console.WriteLine($"{result}, {result == expected}");
