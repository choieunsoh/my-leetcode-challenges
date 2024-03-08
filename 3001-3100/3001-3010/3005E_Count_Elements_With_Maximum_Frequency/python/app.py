# 3005. Count Elements With Maximum Frequency
# https://leetcode.com/problems/count-elements-with-maximum-frequency/
# T.C.: O(n)
# S.C.: O(n)
from collections import defaultdict
from typing import List


class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        result = 0
        max_freq = 0
        freq = defaultdict(int)
        for num in nums:
            freq[num] += 1
            if freq[num] > max_freq:
                max_freq = freq[num]
                result = max_freq
            elif freq[num] == max_freq:
                result += max_freq
        return result


solution = Solution()

nums = [1, 2, 2, 3, 1, 4]
expected = 4
result = solution.maxFrequencyElements(nums)
print(result, result == expected)

nums = [1, 2, 3, 4, 5]
expected = 5
result = solution.maxFrequencyElements(nums)
print(result, result == expected)

nums = [15]
expected = 1
result = solution.maxFrequencyElements(nums)
print(result, result == expected)
