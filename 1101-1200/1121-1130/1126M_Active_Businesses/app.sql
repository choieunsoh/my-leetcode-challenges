# 1126. Active Businesses
# https://leetcode.com/problems/active-businesses/description/

WITH Events (business_id, event_type, occurrences) AS (
  VALUES
    (1, 'reviews', 7),
    (3, 'reviews', 3),
    (1, 'ads', 11),
    (2, 'ads', 7),
    (3, 'ads', 6),
    (1, 'page views', 3),
    (2, 'page views', 12)
),
AvgEvents AS (
  SELECT business_id
  ,occurrences
  ,AVG(occurrences) OVER (PARTITION BY event_type) AS average_occurrences
  FROM Events
)
SELECT business_id
FROM AvgEvents
WHERE occurrences >= average_occurrences
GROUP BY business_id
HAVING COUNT(*) > 1;
