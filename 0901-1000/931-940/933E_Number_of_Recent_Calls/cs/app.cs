// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls
// T.C.: O(1)
// S.C.: O(1)
public class RecentCounter
{
  private Queue<int> queue;

  public RecentCounter()
  {
    queue = new Queue<int>();
  }

  public int Ping(int t)
  {
    queue.Enqueue(t);
    while (queue.Peek() < t - 3000) queue.Dequeue();
    return queue.Count;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */

var obj = new RecentCounter();
var ops = new string[] { "RecentCounter", "ping", "ping", "ping", "ping" };
var inputs = new int[][] {
  new int[0],
  new int[] { 1 },
  new int[] { 100 },
  new int[] { 3001 },
  new int[] { 3002 }
};
var outputs = new int?[] { null, 1, 2, 3, 3 };
for (var i = 1; i < ops.Length; i++)
{
  var op = ops[i];
  var input = inputs[i][0];
  int? expected = outputs[i];
  int? result = null;
  switch (op)
  {
    case "ping":
      result = obj.Ping(input);
      break;
    default:
      break;
  }
  Console.WriteLine($"{i}, {op}, {input}, {result}, {result == expected}");
}
