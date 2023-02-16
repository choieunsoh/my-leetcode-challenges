// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import java.util.Objects;

class Main {
  public static void main(String[] args) {
    Integer[] root = { 3, 9, 20, (Integer) null, (Integer) null, 15, 7 };
    TreeNode tree = TreeNode.newTree(root);
    int expected = 3;
    int result = Solution.maxDepth(tree);
    System.out.println(result == expected);

  }
}

class TreeNode {
  public static TreeNode newTree(Integer... vars) {
    return newTree(0, vars);
  }

  private static TreeNode newTree(int index, Integer... vars) {
    if (index >= vars.length || vars[index] == null)
      return null;

    TreeNode node = new TreeNode(vars[index]);
    node.left = newTree(2 * index + 1, vars);
    node.right = newTree(2 * index + 2, vars);

    return node;
  }

  public int val;

  public TreeNode left;

  public TreeNode right;

  TreeNode(int val) {
    this.val = val;
  }

  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  @Override
  public String toString() {
    return "TreeNode{" +
        "val=" + val +
        ", left=" + left +
        ", right=" + right +
        '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;

    TreeNode treeNode = (TreeNode) o;

    if (val != treeNode.val)
      return false;
    if (!Objects.equals(left, treeNode.left))
      return false;
    return Objects.equals(right, treeNode.right);
  }

  @Override
  public int hashCode() {
    int result = val;
    result = 31 * result + (left != null ? left.hashCode() : 0);
    result = 31 * result + (right != null ? right.hashCode() : 0);
    return result;
  }
}

class Solution {
  public static int maxDepth(TreeNode root) {
    if (root == null)
      return 0;

    final int leftDepth = maxDepth(root.left);
    final int rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}