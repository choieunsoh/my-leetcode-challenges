// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    char[][] grid = {
      {'1', '1', '1', '1', '0'},
      {'1', '1', '0', '1', '0'},
      {'1', '1', '0', '0', '1'},
      {'0', '0', '1', '0', '1'},
    };
    int expected = 3;
    int result = solution.numIslands(grid);
    System.out.printf("%s %s\n", result, expected == result);
  }
}
class Solution {
  public int numIslands(char[][] grid) {
    int islands = 0;
    final int rows = grid.length;
    final int cols = grid[0].length;
    for (int r = 0; r < rows; r++) {
      for (int c = 0; c < cols; c++) {
        if (grid[r][c] == '1') {
          move(grid, rows, cols, r, c);
          islands++;
        }
      }
    }

    return islands;
  }

  private void move(char[][] grid, int rows, int cols, int r, int c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == '0')
      return;

    grid[r][c] = '0';
    move(grid, rows, cols, r + 1, c);
    move(grid, rows, cols, r - 1, c);
    move(grid, rows, cols, r, c + 1);
    move(grid, rows, cols, r, c - 1);
  }
}