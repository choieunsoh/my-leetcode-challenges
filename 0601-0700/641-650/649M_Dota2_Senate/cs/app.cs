// 649. Dota2 Senate
// https://leetcode.com/problems/dota2-senate/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public string PredictPartyVictory(string senate)
  {
    var n = senate.Length;
    var rQueue = new Queue<int>();
    var dQueue = new Queue<int>();
    for (var i = 0; i < n; i++)
    {
      if (senate[i] == 'R')
      {
        rQueue.Enqueue(i);
      }
      else
      {
        dQueue.Enqueue(i);
      }
    }

    while (rQueue.Count > 0 && dQueue.Count > 0)
    {
      var rIndex = rQueue.Dequeue();
      var dIndex = dQueue.Dequeue();
      if (rIndex < dIndex)
      {
        rQueue.Enqueue(rIndex + n);
      }
      else
      {
        dQueue.Enqueue(dIndex + n);
      }
    }

    return rQueue.Count == 0 ? "Dire" : "Radiant";
  }
}

var senate = "DDRRR";
var expected = "Dire";
var result = new Solution().PredictPartyVictory(senate);
Console.WriteLine($"{result}, {result == expected}");

senate = "RD";
expected = "Radiant";
result = new Solution().PredictPartyVictory(senate);
Console.WriteLine($"{result}, {result == expected}");

senate = "RDD";
expected = "Dire";
result = new Solution().PredictPartyVictory(senate);
Console.WriteLine($"{result}, {result == expected}");

senate = "DDRRR";
expected = "Dire";
result = new Solution().PredictPartyVictory(senate);
Console.WriteLine($"{result}, {result == expected}");

senate = "DRRDRDRDRDDRDRDR";
expected = "Radiant";
result = new Solution().PredictPartyVictory(senate);
Console.WriteLine($"{result}, {result == expected}");
