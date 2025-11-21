# 603. Consecutive Available Seats
# https://leetcode.com/problems/consecutive-available-seats/description/
WITH Cinema (seat_id, free) AS (
  SELECT 1, 1
  UNION ALL
  SELECT 2, 0
  UNION ALL
  SELECT 3, 1
  UNION ALL
  SELECT 4, 1
  UNION ALL
  SELECT 5, 1
),
CinemaFree AS (
  SELECT seat_id
  ,free
  ,LAG(free,1,0) OVER(ORDER BY seat_id) AS prev_free
  ,LEAD(free,1,0) OVER(ORDER BY seat_id) AS next_free
  FROM Cinema
)
SELECT seat_id
FROM CinemaFree
WHERE free = 1
AND (prev_free = 1 OR next_free = 1)
ORDER BY seat_id;
