# 619. Biggest Single Number
# https://leetcode.com/problems/biggest-single-number/description/
WITH MyNumbers (num) AS (
  SELECT 8
  UNION ALL
  SELECT 8
  UNION ALL
  SELECT 3
  UNION ALL
  SELECT 3
  UNION ALL
  SELECT 1
  UNION ALL
  SELECT 4
  UNION ALL
  SELECT 5
  UNION ALL
  SELECT 6
), UniqueNumbers AS (
  SELECT num
  FROM MyNumbers
  GROUP BY num
  HAVING COUNT(*) = 1
)
SELECT MAX(num) AS num
FROM UniqueNumbers;

WITH MyNumbers (num) AS (
  SELECT 8
  UNION ALL
  SELECT 8
), UniqueNumbers AS (
  SELECT num
  FROM MyNumbers
  GROUP BY num
  HAVING COUNT(*) = 1
)
SELECT MAX(num) AS num
FROM UniqueNumbers;
