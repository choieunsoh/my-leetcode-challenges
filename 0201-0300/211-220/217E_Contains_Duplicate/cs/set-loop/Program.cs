﻿// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
bool ContainsDuplicate(int[] nums) {
  var duplicates = new HashSet<int>();
  for (var i = 0; i < nums.Length; i++) {
    if (duplicates.Contains(nums[i])) return true;
    duplicates.Add(nums[i]);
  }
  return false;
}

void Run(int[] nums, bool expected) {
  bool result = ContainsDuplicate(nums);
  Console.WriteLine(@"{0} {1} {2}", result, expected,result == expected);
}

int[] nums = new int[] { 1, 2, 3, 1 };
bool expected = true;
Run(nums, expected);

nums = new int[] { 1, 2, 3, 4 };
expected = false;
Run(nums, expected);

nums = new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 };
expected = true;
Run(nums, expected);
