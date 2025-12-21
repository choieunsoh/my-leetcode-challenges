# 585. Investments in 2016
# https://leetcode.com/problems/investments-in-2016/description/
WITH Insurance (pid, tiv_2015, tiv_2016, lat, lon) AS (
  VALUES
    (1, 224.17, 952.73, 32.4, 20.2),
    (2, 224.17, 900.66, 52.4, 32.7),
    (3, 824.61, 645.13, 72.4, 45.2),
    (4, 424.32, 323.66, 12.4, 7.7),
    (5, 424.32, 282.9, 12.4, 7.7),
    (6, 625.05, 243.53, 52.5, 32.8),
    (7, 424.32, 968.94, 72.5, 45.3),
    (8, 624.46, 714.13, 12.5, 7.8),
    (9, 425.49, 463.85, 32.5, 20.3),
    (10, 624.46, 776.85, 12.4, 7.7),
    (11, 624.46, 692.71, 72.5, 45.3),
    (12, 225.93, 933, 12.5, 7.8),
    (13, 824.61, 786.86, 32.6, 20.3),
    (14, 824.61, 935.34, 52.6, 32.8)
),
Policies AS (
  SELECT pid, tiv_2015, tiv_2016, lat, lon
  ,COUNT(pid) OVER (PARTITION BY tiv_2015) AS policy_count
  ,COUNT(pid) OVER (PARTITION BY lat, lon) AS location_count
  FROM Insurance
)
SELECT ROUND(1.0*SUM(tiv_2016),2) AS tiv_2016
FROM Policies
WHERE policy_count > 1
AND location_count = 1;
