// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
  public int MaxDepth(TreeNode root)
  {
    if (root == null)
    {
      return 0;
    }

    return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
  }
}

// [3, 9, 20, null, null, 15, 7]
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
var expect = 3;
var result = new Solution().MaxDepth(root);
Console.WriteLine($"{result}, {result == expect}");

// [1, null, 2]
root = new TreeNode(1);
root.right = new TreeNode(2);
expect = 2;
result = new Solution().MaxDepth(root);
Console.WriteLine($"{result}, {result == expect}");
