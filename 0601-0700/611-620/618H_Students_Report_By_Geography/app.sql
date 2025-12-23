# 618. Students Report By Geography
# https://leetcode.com/problems/students-report-by-geography/description/

WITH Student (name, continent) AS (
  VALUES
    ('Jane', 'America'),
    ('Pascal', 'Europe'),
    ('Xi', 'Asia'),
    ('Jack', 'America')
),
StudentWithRow AS (
  SELECT name, continent
  ,ROW_NUMBER() OVER (PARTITION BY continent ORDER BY name) AS row_id
  FROM Student
)
SELECT
  MAX(CASE WHEN continent = 'America' THEN name END) AS America,
  MAX(CASE WHEN continent = 'Asia' THEN name END) AS Asia,
  MAX(CASE WHEN continent = 'Europe' THEN name END) AS Europe
FROM StudentWithRow
GROUP BY row_id
ORDER BY row_id;
