// 437. Path Sum III
// https://leetcode.com/problems/path-sum-iii/
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
  public int PathSum(TreeNode root, int targetSum)
  {
    if (root == null)
    {
      return 0;
    }

    var currentCount = Dfs(root, targetSum);
    var leftCount = PathSum(root.left, targetSum);
    var rightCount = PathSum(root.right, targetSum);

    return currentCount + leftCount + rightCount;
  }

  private int Dfs(TreeNode root, long currentSum)
  {
    if (root == null)
    {
      return 0;
    }

    var currentCount = currentSum == root.val ? 1 : 0;
    var leftCount = Dfs(root.left, currentSum - root.val);
    var rightCount = Dfs(root.right, currentSum - root.val);

    return currentCount + leftCount + rightCount;
  }
}

// [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
var root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);
var targetSum = 8;
var expected = 3;
var result = new Solution().PathSum(root, targetSum);
Console.WriteLine($"{result}, {result == expected}");

// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
targetSum = 22;
expected = 3;
result = new Solution().PathSum(root, targetSum);
Console.WriteLine($"{result}, {result == expected}");

// [1000000000, 1000000000, null, 294967296, null, 1000000000, null, 1000000000, null, 1000000000]
root = new TreeNode(1000000000);
root.left = new TreeNode(1000000000);
root.left.left = new TreeNode(294967296);
root.left.left.left = new TreeNode(1000000000);
root.left.left.left.left = new TreeNode(1000000000);
root.left.left.left.left.left = new TreeNode(1000000000);
targetSum = 0;
expected = 0;
result = new Solution().PathSum(root, targetSum);
Console.WriteLine($"{result}, {result == expected}");
