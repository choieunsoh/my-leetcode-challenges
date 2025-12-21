# 601. Human Traffic of Stadium
# https://leetcode.com/problems/human-traffic-of-stadium/description/

WITH Stadium (id, visit_date, people) AS (
  VALUES
    (1, '2017-01-01', 10),
    (2, '2017-01-02', 109),
    (3, '2017-01-03', 150),
    (4, '2017-01-04', 99),
    (5, '2017-01-05', 145),
    (6, '2017-01-06', 1455),
    (7, '2017-01-07', 199),
    (8, '2017-01-09', 188)
),
MoreVisitors AS (
  SELECT id, visit_date, people
  ,ROW_NUMBER() OVER (ORDER BY id) AS row_id
  ,id-ROW_NUMBER() OVER (ORDER BY id) AS group_id
  FROM Stadium
  WHERE people >= 100
),
ConsecutiveGroups AS (
  SELECT id, visit_date, people
  ,COUNT(*) OVER (PARTITION BY group_id) AS consecutive_days
  FROM MoreVisitors
)
SELECT id, visit_date, people
FROM ConsecutiveGroups
WHERE consecutive_days >= 3
ORDER BY visit_date;
