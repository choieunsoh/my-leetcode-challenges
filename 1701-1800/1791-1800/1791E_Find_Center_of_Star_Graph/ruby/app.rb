# 1791. Find Center of Star Graph
# https://leetcode.com/problems/find-center-of-star-graph/description/
# T.C: O(1)
# S.C: O(1)
# @param {Integer[][]} edges
# @return {Integer}
def find_center(edges)
    if edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]
      return edges[0][0]
    end
    return edges[0][1]
end
edges1 = [[1, 2], [2, 3], [4, 2]]
expected1 = 2
result1 = find_center(edges1)
puts result1, result1 == expected1

edges2 = [[1, 2], [5, 1], [1, 3], [1, 4]]
expected2 = 1
result2 = find_center(edges2)
puts result2, result2 == expected2

edges3 = [
  [1, 18], [18, 2], [3, 18], [18, 4], [18, 5],
  [6, 18], [18, 7], [18, 8], [18, 9], [18, 10],
  [18, 11], [12, 18], [18, 13], [18, 14], [15, 18],
  [16, 18], [17, 18]
]
expected3 = 18
result3 = find_center(edges3)
puts result3, result3 == expected3