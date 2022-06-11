-- https://leetcode.com/problems/rising-temperature/
-- 197. Rising Temperature
WITH temp AS (
  SELECT id
  ,temperature
  ,DATEDIFF(day,LAG(recordDate,1) OVER (ORDER BY recordDate),recordDate) AS days
  ,LAG(temperature,1) OVER (ORDER BY recordDate) AS prev
  FROM Weather
)
SELECT id
FROM temp
WHERE temperature > prev
AND days = 1