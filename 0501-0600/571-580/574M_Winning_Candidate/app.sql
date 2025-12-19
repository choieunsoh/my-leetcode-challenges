# 574. Winning Candidate
# https://leetcode.com/problems/winning-candidate/description/

WITH Candidate (id, name) AS (
  VALUES
    (1, 'A'),
    (2, 'B'),
    (3, 'C'),
    (4, 'D'),
    (5, 'E')
),
Vote (id, candidateId) AS (
  VALUES
    (1, 2),
    (2, 4),
    (3, 3),
    (4, 2),
    (5, 5)
)
SELECT name
FROM Candidate C
INNER JOIN Vote V
ON C.id = V.candidateId
GROUP BY C.id
ORDER BY COUNT(*) DESC
LIMIT 1;
