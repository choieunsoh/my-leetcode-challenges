-- https://leetcode.com/problems/big-countries/
/* Write your T-SQL query statement below */
;WITH World AS (
  SELECT 'Afghanistan' AS name,'Asia' AS continent,652230 AS area,25500100 AS population,20343000000 AS gdp
  UNION SELECT 'Albania','Europe',28748,2831741,12960000000
  UNION SELECT 'Algeria','Africa',2381741,37100000,188681000000
  UNION SELECT 'Andorra','Europe',468,781153712000000
  UNION SELECT 'Angola','Africa',1246700,20609294,100990000000 
)
SELECT name, population, area
FROM World
WHERE population >= 25e6
OR area >= 3e6