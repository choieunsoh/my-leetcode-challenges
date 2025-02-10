// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public bool CanVisitAllRooms(IList<IList<int>> rooms)
  {
    var visited = new bool[rooms.Count];
    var queue = new Queue<int>();
    queue.Enqueue(0);
    while (queue.Count > 0)
    {
      var room = queue.Dequeue();
      visited[room] = true;
      foreach (var key in rooms[room])
      {
        if (!visited[key])
        {
          queue.Enqueue(key);
        }
      }
    }

    for (var i = 0; i < rooms.Count; i++)
    {
      if (!visited[i]) return false;
    }
    return true;
  }
}

var rooms = new List<IList<int>> {
  new List<int> { 1 },
  new List<int> { 2 },
  new List<int> { 3 },
  new List<int> { },
};
var expected = true;
var result = new Solution().CanVisitAllRooms(rooms);
Console.WriteLine($"{result}, {result == expected}");

rooms = new List<IList<int>> {
  new List<int> { 1, 3 },
  new List<int> { 3, 0, 1 },
  new List<int> { 2 },
  new List<int> { 0 },
};
expected = false;
result = new Solution().CanVisitAllRooms(rooms);
Console.WriteLine($"{result}, {result == expected}");
