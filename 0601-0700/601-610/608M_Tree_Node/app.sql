-- https://leetcode.com/problems/tree-node/
-- 608. Tree Node
WITH temp AS (
  SELECT A.id,A.p_id,SUM(CASE WHEN B.id IS NULL THEN 0 ELSE 1 END) AS children
  FROM tree A
  LEFT JOIN tree B
  ON A.id = B.p_id
  GROUP BY A.id,A.p_id
)
SELECT id
,CASE WHEN p_id IS NULL THEN 'Root'
  WHEN children = 0 THEN 'Leaf'
  ELSE 'Inner' 
END AS type
FROM temp
