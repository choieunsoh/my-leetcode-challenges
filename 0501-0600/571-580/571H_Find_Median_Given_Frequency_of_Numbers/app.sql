# 571. Find Median Given Frequency of Numbers
# https://leetcode.com/problems/find-median-given-frequency-of-numbers/description/

WITH Numbers (num, frequency) AS (
  VALUES
    (1, 7),
    (2, 1),
    (3, 3),
    (4, 4)
), temp1 AS (
  SELECT num, frequency
  , SUM(frequency) OVER (ORDER BY num ROWS UNBOUNDED PRECEDING) AS running_count
  , SUM(frequency) OVER () AS total_count
  FROM Numbers
), temp2 AS (
  SELECT num, frequency
  , LAG(running_count, 1, 0) OVER (ORDER BY num) + 1 AS lower_count
  , running_count AS upper_count
  , total_count
  FROM temp1
)
SELECT ROUND(CASE total_count % 2
    WHEN 0 THEN
      (SELECT AVG(CAST(num AS FLOAT))
       FROM temp2
       WHERE lower_count <= total_count / 2
       AND upper_count >= total_count / 2
       OR lower_count <= total_count / 2 + 1
       AND upper_count >= total_count / 2 + 1)
    ELSE
      (SELECT num
       FROM temp2
       WHERE lower_count <= (total_count + 1) / 2
       AND upper_count >= (total_count + 1) / 2)
  END, 1) AS median
FROM temp2 LIMIT 1;
