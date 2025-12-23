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
SELECT America, Asia, Europe
FROM StudentWithRow
PIVOT (
  MAX(name) FOR continent IN (America, Asia, Europe)
) AS pvt
ORDER BY row_id;
