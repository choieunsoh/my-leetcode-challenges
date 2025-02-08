// 450. Delete Node in a BST
// https://leetcode.com/problems/delete-node-in-a-bst/
// T.C.: O(log n)
// S.C.: O(log n)
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
  public TreeNode DeleteNode(TreeNode root, int key)
  {
    if (root == null) return root;

    if (root.val == key)
    {
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;

      var min = root.right;
      while (min.left != null)
      {
        min = min.left;
      }

      root.right = DeleteNode(root.right, min.val);
      min.left = root.left;
      min.right = root.right;
      return min;
    }

    if (key < root.val)
    {
      root.left = DeleteNode(root.left, key);
    }
    else
    {
      root.right = DeleteNode(root.right, key);
    }

    return root;
  }
}

// [5, 3, 6, 2, 4, null, 7]
var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
var key = 3;
// [5, 4, 6, 2, null, null, 7];
var expected = new TreeNode(5);
expected.left = new TreeNode(4);
expected.right = new TreeNode(6);
expected.left.left = new TreeNode(2);
expected.right.right = new TreeNode(7);
var result = new Solution().DeleteNode(root, key);
Console.WriteLine($"{result.val}, {result.val == expected.val}");

// [5, 3, 6, 2, 4, null, 7],
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
key = 0;
// [5, 3, 6, 2, 4, null, 7];
expected = new TreeNode(5);
expected.left = new TreeNode(3);
expected.right = new TreeNode(6);
expected.left.left = new TreeNode(2);
expected.left.right = new TreeNode(4);
expected.right.right = new TreeNode(7);
result = new Solution().DeleteNode(root, key);
Console.WriteLine($"{result.val}, {result.val == expected.val}");

root = null;
key = 0;
expected = null;
result = new Solution().DeleteNode(root, key);
Console.WriteLine($"{result}, {result == expected}");

// [5, 3, 6, 2, 4, null, 7],
root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
key = 5;
// [6, 3, 7, 2, 4];
expected = new TreeNode(6);
expected.left = new TreeNode(3);
expected.right = new TreeNode(7);
expected.left.left = new TreeNode(2);
expected.left.right = new TreeNode(4);
result = new Solution().DeleteNode(root, key);
Console.WriteLine($"{result.val}, {result.val == expected.val}");
