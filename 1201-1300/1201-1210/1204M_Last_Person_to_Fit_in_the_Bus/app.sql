# 1204. Last Person to Fit in the Bus
# https://leetcode.com/problems/last-person-to-fit-in-the-bus/description/

WITH Queue (person_id, person_name, weight, turn) AS (
  VALUES
    (5, 'Alice', 250, 1),
    (4, 'Bob', 175, 5),
    (3, 'Alex', 350, 2),
    (6, 'John Cena', 400, 3),
    (1, 'Winston', 500, 6),
    (2, 'Marie', 200, 4)
),
CumulativeWeights AS (
  SELECT person_name
  ,SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
  FROM Queue
)
SELECT person_name
FROM CumulativeWeights
WHERE cumulative_weight <= 1000
ORDER BY cumulative_weight DESC
LIMIT 1;
