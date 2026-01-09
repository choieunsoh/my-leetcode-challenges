# 1211. Queries Quality and Percentage
# https://leetcode.com/problems/queries-quality-and-percentage/description/

WITH Queries (query_name, result, position, rating) AS (
  VALUES
    ('Dog', 'Golden Retriever', 1, 5),
    ('Dog', 'German Shepherd', 2, 5),
    ('Dog', 'Mule', 200, 1),
    ('Cat', 'Shirazi', 5, 2),
    ('Cat', 'Siamese', 3, 3),
    ('Cat', 'Sphynx', 7, 4)
)
SELECT query_name
,ROUND(AVG(1.0 * rating / position), 2) AS quality
,ROUND(AVG(CASE WHEN rating < 3 THEN 1.0 ELSE 0 END) * 100, 2) AS poor_query_percentage
FROM Queries
GROUP BY query_name;
