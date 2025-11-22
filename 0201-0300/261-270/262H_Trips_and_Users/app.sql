# 262. Trips and Users
# https://leetcode.com/problems/trips-and-users/description/

WITH Trips (id, client_id, driver_id, city_id, status, request_at) AS (
    SELECT 1, 1, 10, 1, 'completed', '2013-10-01' UNION ALL
    SELECT 2, 2, 11, 1, 'cancelled_by_driver', '2013-10-01' UNION ALL
    SELECT 3, 3, 12, 6, 'completed', '2013-10-01' UNION ALL
    SELECT 4, 4, 13, 6, 'cancelled_by_client', '2013-10-01' UNION ALL
    SELECT 5, 1, 10, 1, 'completed', '2013-10-02' UNION ALL
    SELECT 6, 2, 11, 6, 'completed', '2013-10-02' UNION ALL
    SELECT 7, 3, 12, 6, 'completed', '2013-10-02' UNION ALL
    SELECT 8, 2, 12, 12, 'completed', '2013-10-03' UNION ALL
    SELECT 9, 3, 10, 12, 'completed', '2013-10-03' UNION ALL
    SELECT 10, 4, 13, 12, 'cancelled_by_driver', '2013-10-03'
),
Users (users_id, banned, role) AS (
    SELECT 1, 'No', 'client' UNION ALL
    SELECT 2, 'Yes', 'client' UNION ALL
    SELECT 3, 'No', 'client' UNION ALL
    SELECT 4, 'No', 'client' UNION ALL
    SELECT 10, 'No', 'driver' UNION ALL
    SELECT 11, 'No', 'driver' UNION ALL
    SELECT 12, 'No', 'driver' UNION ALL
    SELECT 13, 'No', 'driver'
),
ValidUsers AS (
  SELECT users_id, role
  FROM Users
  WHERE banned = 'No'
  AND (role = 'driver' OR role = 'client')
)
SELECT T.request_at AS "Day"
,ROUND(
  1.0 * SUM(CASE WHEN T.status != 'completed' THEN 1 ELSE 0 END)
  / COUNT(T.id)
, 2) AS "Cancellation Rate"
FROM Trips T
INNER JOIN ValidUsers C
ON T.client_id = C.users_id
AND C.role = 'client'
INNER JOIN ValidUsers D
ON T.driver_id = D.users_id
AND D.role = 'driver'
WHERE T.request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY T.request_at;
