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
  , SUM(frequency) OVER () AS total
  , SUM(frequency) OVER (ORDER BY num) AS lower_freq
  , SUM(frequency) OVER (ORDER BY num DESC) AS upper_freq
  FROM Numbers
)
SELECT ROUND(AVG(num), 1) AS median
FROM temp1
WHERE lower_freq * 2 >= total
AND upper_freq * 2 >= total;
