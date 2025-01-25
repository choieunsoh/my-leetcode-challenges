// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public bool CanPlaceFlowers(int[] flowerbed, int n)
  {
    if (n == 0) return true;

    for (var i = 0; i < flowerbed.Length; i++)
    {
      if (flowerbed[i] == 0 && (i - 1 < 0 || flowerbed[i - 1] == 0) && (i + 1 >= flowerbed.Length || flowerbed[i + 1] == 0))
      {
        flowerbed[i++] = 1;
        if (--n == 0) return true;
      }
    }
    return false;
  }
}

var flowerbed = new int[] { 1, 0, 0, 0, 1 };
var n = 1;
var expected = true;
var result = new Solution().CanPlaceFlowers(flowerbed, n);
Console.WriteLine($"{result}, {result == expected}");

flowerbed = new int[] { 1, 0, 0, 0, 1 };
n = 2;
expected = false;
result = new Solution().CanPlaceFlowers(flowerbed, n);
Console.WriteLine($"{result}, {result == expected}");

flowerbed = new int[] { 0, 0, 1, 0, 1 };
n = 1;
expected = true;
result = new Solution().CanPlaceFlowers(flowerbed, n);
Console.WriteLine($"{result}, {result == expected}");
