# 610. Triangle Judgement
# https://leetcode.com/problems/triangle-judgement/description/
WITH Triangle (x, y, z) AS (
  SELECT 13, 15, 30
  UNION ALL
  SELECT 10, 20, 15
)
SELECT x, y, z, CASE WHEN x+y>z AND x+z>y AND y+z>x THEN 'Yes' ELSE 'No' END AS triangle
FROM Triangle;
