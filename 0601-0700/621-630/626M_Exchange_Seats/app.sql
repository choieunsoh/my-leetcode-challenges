# 626. Exchange Seats
# https://leetcode.com/problems/exchange-seats/description/

WITH Seat (id, student) AS (
  VALUES
    (1, 'Abbot'),
    (2, 'Doris'),
    (3, 'Emerson'),
    (4, 'Green'),
    (5, 'Jeames')
),
PrevNextSeat AS (
  SELECT id, student
  ,LAG(student) OVER (ORDER BY id) AS prev_student
  ,LEAD(student) OVER (ORDER BY id) AS next_student
  FROM Seat
)
SELECT id
,CASE
  WHEN id % 2 = 1 THEN COALESCE(next_student, student)
  ELSE prev_student
END AS student
FROM PrevNextSeat
ORDER BY id;
