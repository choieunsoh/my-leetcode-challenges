// 735. Asteroid Collision
// https://leetcode.com/problems/asteroid-collision/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public int[] AsteroidCollision(int[] asteroids)
  {
    var stack = new Stack<int>();
    for (var i = 0; i < asteroids.Length; i++)
    {
      var asteroid = asteroids[i];
      while (stack.Count > 0 && asteroid < 0 && stack.Peek() > 0)
      {
        var diff = asteroid + stack.Peek();
        if (diff > 0)
        {
          asteroid = 0;
        }

        if (diff < 0)
        {
          stack.Pop();
        }
        else if (diff == 0)
        {
          stack.Pop();
          asteroid = 0;
        }
      }

      if (asteroid != 0)
      {
        stack.Push(asteroid);
      }
    }
    return stack.Reverse().ToArray();
  }
}

var asteroids = new int[] { 5, 10, -5 };
var expected = new int[] { 5, 10 };
var result = new Solution().AsteroidCollision(asteroids);
Console.WriteLine($"{string.Join(",", result)}, {result.SequenceEqual(expected)}");

asteroids = new int[] { 8, -8 };
expected = new int[0]; ;
result = new Solution().AsteroidCollision(asteroids);
Console.WriteLine($"{string.Join(",", result)}, {result.SequenceEqual(expected)}");

asteroids = new int[] { 10, 2, -5 };
expected = new int[] { 10 };
result = new Solution().AsteroidCollision(asteroids);
Console.WriteLine($"{string.Join(",", result)}, {result.SequenceEqual(expected)}");

asteroids = new int[] { -2, -1, 1, 2 };
expected = new int[] { -2, -1, 1, 2 };
result = new Solution().AsteroidCollision(asteroids);
Console.WriteLine($"{string.Join(",", result)}, {result.SequenceEqual(expected)}");
