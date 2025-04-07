// 3510. Minimum Pair Removal to Sort Array II
// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)

import java.util.TreeSet;

class Solution {

  private class Pair implements Comparable<Pair> {

    final int index;
    long sum;
    long right;
    Pair prev;
    Pair next;

    // First (dummy) pair
    Pair(long right) {
      index = -1;
      sum = INF_VAL + right;
      this.right = right;
    }

    // Middle (real) pair
    Pair(Pair prev, long right) {
      index = prev.index + 1;
      sum = prev.right + right;
      this.right = right;
      this.prev = prev;
      prev.next = this;
    }

    // Last (dummy) pair
    Pair(Pair first, Pair last) {
      this(last, INF_VAL);
      // Close the circle
      next = first;
      first.prev = this;
    }

    @Override
    public int compareTo(Pair other) {
      long d = sum - other.sum;
      return d != 0 ? d < 0 ? -1 : 1 : index - other.index;
    }

    // Returns 1 if left > right and 0 otherwise
    int decIndicator() {
      return sum > right << 1 ? 1 : 0;
    }

    // Unite left and right and discard this pair
    void join() {
      // Remove from circle (already removed from queue)
      prev.next = next;
      next.prev = prev;
      // Update decreasing pairs number
      decCount -= decIndicator();
      // Update neighboring pairs
      prev.update(right, true);
      next.update(sum - right, false);
    }

    private void update(long delta, boolean changeRight) {
      decCount -= decIndicator();
      queue.remove(this);
      sum += delta;
      if (changeRight) right += delta;
      queue.add(this);
      decCount += decIndicator();
    }
  }

  private static final long INF_VAL = Long.MAX_VALUE / 2;
  private TreeSet<Pair> queue;

  private int decCount;

  public int minimumPairRemoval(int[] nums) {
    queue = new TreeSet<>();
    decCount = 0;
    Pair first = new Pair(nums[0]);
    Pair last = first;
    for (int i = 1, n = nums.length; i < n; i++) {
      last = new Pair(last, nums[i]);
      queue.add(last);
      decCount += last.decIndicator();
    }
    new Pair(first, last);
    int result = 0;
    while (decCount > 0) {
      queue.pollFirst().join(); // updates decCount
      result++;
    }
    return result;
  }
}
