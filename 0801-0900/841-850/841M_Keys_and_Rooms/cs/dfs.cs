// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/
// T.C.: O(N+E)
// S.C.: O(N)
public class Solution
{
  public bool CanVisitAllRooms(IList<IList<int>> rooms)
  {
    var visitedRooms = new bool[rooms.Count];

    Visit(visitedRooms, rooms, 0);

    for (var i = 0; i < visitedRooms.Length; i++)
    {
      if (visitedRooms[i] == false)
      {
        return false;
      }
    }

    return true;
  }

  void Visit(bool[] visited, IList<IList<int>> rooms, int roomIndex)
  {
    visited[roomIndex] = true;

    var keys = rooms[roomIndex];

    for (var keyIndex = 0; keyIndex < keys.Count; keyIndex++)
    {
      var key = keys[keyIndex];

      if (visited[key] == false)
      {
        Visit(visited, rooms, key);
      }
    }
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
