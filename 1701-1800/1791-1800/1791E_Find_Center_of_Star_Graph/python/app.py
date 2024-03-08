# 1791. Find Center of Star Graph
# https://leetcode.com/problems/find-center-of-star-graph/description/
# T.C: O(1)
# S.C: O(1)
from typing import List


class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        return edges[0][1]


solution = Solution()

edges = [
    [1, 2],
    [2, 3],
    [4, 2]
]
expected = 2
result = solution.findCenter(edges)
print(result, result == expected)

edges = [
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4]
]
expected = 1
result = solution.findCenter(edges)
print(result, result == expected)

edges = [
    [1, 18],
    [18, 2],
    [3, 18],
    [18, 4],
    [18, 5],
    [6, 18],
    [18, 7],
    [18, 8],
    [18, 9],
    [18, 10],
    [18, 11],
    [12, 18],
    [18, 13],
    [18, 14],
    [15, 18],
    [16, 18],
    [17, 18]
]
expected = 18
result = solution.findCenter(edges)
print(result, result == expected)
