// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/
// T.C.: O(n)
// S.C.: O(1)
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
  public TreeNode SearchBST(TreeNode root, int val)
  {
    if (root == null) return null;
    if (root.val == val) return root;
    if (root.val > val) return SearchBST(root.left, val);
    return SearchBST(root.right, val);
  }
}

// [4, 2, 7, 1, 3]
var root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
var val = 2;
// [2, 1, 3];
var expected = new TreeNode(2);
expected.left = new TreeNode(1);
expected.right = new TreeNode(3);
var result = new Solution().SearchBST(root, val);
Console.WriteLine($"{result.val}, {result.val == expected.val}");

// [4, 2, 7, 1, 3]
root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
val = 5;
expected = null;
result = new Solution().SearchBST(root, val);
Console.WriteLine($"{result}, {result == expected}");
