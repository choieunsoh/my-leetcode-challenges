// 1372. Longest ZigZag Path in a Binary Tree
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
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
  private int maxLength = 0;

  public int LongestZigZag(TreeNode root)
  {
    Dfs(root, true, 0);
    return maxLength;
  }

  private void Dfs(TreeNode root, bool goLeft, int steps)
  {
    if (root == null)
    {
      return;
    }

    maxLength = Math.Max(maxLength, steps);

    if (goLeft)
    {
      Dfs(root.left, false, steps + 1);
      Dfs(root.right, true, 1);
    }
    else
    {
      Dfs(root.left, false, 1);
      Dfs(root.right, true, steps + 1);
    }
  }
}

// [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1];
var root = new TreeNode(1);
root.right = new TreeNode(1);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);
root.right.right.left = new TreeNode(1);
root.right.right.right = new TreeNode(1);
root.right.right.left.right = new TreeNode(1);
root.right.right.left.right.right = new TreeNode(1);
var expected = 3;
var result = new Solution().LongestZigZag(root);
Console.WriteLine($"{result}, {result == expected}");

// [1, 1, 1, null, 1, null, null, 1, 1, null, 1];
root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.right = new TreeNode(1);
root.left.right.left = new TreeNode(1);
root.left.right.right = new TreeNode(1);
root.left.right.left.right = new TreeNode(1);
expected = 4;
result = new Solution().LongestZigZag(root);
Console.WriteLine($"{result}, {result == expected}");

// [1];
root = new TreeNode(1);
expected = 0;
result = new Solution().LongestZigZag(root);
Console.WriteLine($"{result}, {result == expected}");
