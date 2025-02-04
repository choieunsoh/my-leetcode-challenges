// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/
// T.C.: O(m+n)
// S.C.: O(m+n)
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
  public bool LeafSimilar(TreeNode root1, TreeNode root2)
  {
    List<int> leaves1 = new List<int>();
    List<int> leaves2 = new List<int>();
    GetLeaves(root1, leaves1);
    GetLeaves(root2, leaves2);

    if (leaves1.Count != leaves2.Count)
    {
      return false;
    }

    for (int i = 0; i < leaves1.Count; i++)
    {
      if (leaves1[i] != leaves2[i])
      {
        return false;
      }
    }

    return true;
  }

  private void GetLeaves(TreeNode root, List<int> leaves)
  {
    if (root == null)
    {
      return;
    }

    if (root.left == null && root.right == null)
    {
      leaves.Add(root.val);
    }

    GetLeaves(root.left, leaves);
    GetLeaves(root.right, leaves);
  }
}

// [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
// [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8];
var root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
var root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(8);
var expected = true;
var result = new Solution().LeafSimilar(root1, root2);
Console.WriteLine($"{result}, {result == expected}");

// [1, 2, 3],
// [1, 3, 2];
root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.right = new TreeNode(2);
expected = false;
result = new Solution().LeafSimilar(root1, root2);
Console.WriteLine($"{result}, {result == expected}");

// [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
// [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 11, null, null, 8, 10];
root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(11);
root2.right.right.right.left = new TreeNode(8);
root2.right.right.right.right = new TreeNode(10);
expected = false;
result = new Solution().LeafSimilar(root1, root2);
Console.WriteLine($"{result}, {result == expected}");
