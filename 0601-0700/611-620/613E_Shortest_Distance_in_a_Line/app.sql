# 613. Shortest Distance in a Line
# https://leetcode.com/problems/shortest-distance-in-a-line/description/
WITH Point (x) AS (
  SELECT -1
  UNION ALL
  SELECT 0
  UNION ALL
  SELECT 2
),
Points AS (
  SELECT x
  ,LAG(x,1) OVER (ORDER BY x) AS left_x
  ,LAST_VALUE(x) OVER (ORDER BY x ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last_x
  FROM Point
)
SELECT MIN(ABS(x-IFNULL(left_x, last_x))) AS shortest
FROM Points;
